class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callbackFn) {
    if (!this.events[eventName]) this.events[eventName] = {};
    
    this.events[eventName][callbackFn.name] = callbackFn;
  }

  emit(eventName, data) {
    Object.values(this.events[eventName]).forEach((callbackFn) => {
      callbackFn(data);
    });
  }

  removeListener(eventName, callbackFn) {
    delete this.events[eventName][callbackFn.name];
  }
}


let superbowl = new EventEmitter();

 const cheer = function (eventData) {
   console.log('RAAAAAHHHH!!!! Go ' + eventData.scoringTeam)
 };

 const jeer = function (eventData) {
   console.log('BOOOOOO ' + eventData.scoringTeam)
 };

 superbowl.on('touchdown', cheer);
 superbowl.on('touchdown', jeer);

 superbowl.emit('touchdown', {
   scoringTeam: 'Patriots'
 }); // Both cheer and jeer should have been called with data

 superbowl.removeListener('touchdown', jeer);

 superbowl.emit('touchdown', {
   scoringTeam: 'Seahawks'
 }); // Only cheer should have been called
