const airportConnections = require('../../problems/airportConnections');

describe('airportConnections()', () => {
  
  it('Test Case 0', () => {
    const expected = 3; // ['11', '17'], ['11', '15'], and ['11', '6']
    const {airports, routes, startingAirport} = {
      'airports': [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', 
        '10', '11', '12', '13', '14', '15', '16', '17', '18',
      ],
      'routes': [
        ['5', '13'],
        ['13', '1'],
        ['1', '11'],
        ['16', '2'],
        ['2', '16'],
        ['2', '18'],
        ['3', '4'],
        ['3', '2'],
        ['17', '3'],
        ['6', '8'],
        ['8', '9'],
        ['8', '10'],
        ['9', '10'],
        ['10', '11'],
        ['7', '12'],
        ['12', '15'],
        ['15', '14'],
        ['15', '5'],
        ['14', '7'],
      ],
      'startingAirport': '11'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });
  
  it('Test Case 1', () => {
    const expected = 3;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['DSM', 'ORD'],
        ['ORD', 'BGI'],
        ['BGI', 'LGA'],
        ['SIN', 'CDG'],
        ['CDG', 'SIN'],
        ['CDG', 'BUD'],
        ['DEL', 'DOH'],
        ['DEL', 'CDG'],
        ['TLV', 'DEL'],
        ['EWR', 'HND'],
        ['HND', 'ICN'],
        ['HND', 'JFK'],
        ['ICN', 'JFK'],
        ['JFK', 'LGA'],
        ['EYW', 'LHR'],
        ['LHR', 'SFO'],
        ['SFO', 'SAN'],
        ['SFO', 'DSM'],
        ['SAN', 'EYW']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 2', () => {
    const expected = 17;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 3', () => {
    const expected = 14;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [['LGA', 'DSM'], ['LGA', 'ORD'], ['LGA', 'EYW']],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 4', () => {
    const expected = 11;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['LGA', 'DSM'],
        ['DSM', 'ORD'],
        ['LGA', 'EYW'],
        ['EYW', 'JFK'],
        ['EYW', 'EWR'],
        ['JFK', 'ICN']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 5', () => {
    const expected = 11;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['LGA', 'DSM'],
        ['DSM', 'ORD'],
        ['LGA', 'EYW'],
        ['EYW', 'JFK'],
        ['EYW', 'EWR'],
        ['JFK', 'ICN'],
        ['LGA', 'ICN'],
        ['ICN', 'ORD'],
        ['ICN', 'EWR'],
        ['JFK', 'DSM']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 6', () => {
    const expected = 10;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['LGA', 'DSM'],
        ['DSM', 'ORD'],
        ['LGA', 'EYW'],
        ['EYW', 'JFK'],
        ['EYW', 'EWR'],
        ['JFK', 'ICN'],
        ['LGA', 'ICN'],
        ['ICN', 'ORD'],
        ['ICN', 'EWR'],
        ['JFK', 'DSM'],
        ['ICN', 'JFK'],
        ['ORD', 'DSM'],
        ['DSM', 'LGA'],
        ['JFK', 'LGA'],
        ['JFK', 'HND']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 7', () => {
    const expected = 3;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['LGA', 'DSM'],
        ['DSM', 'ORD'],
        ['LGA', 'EYW'],
        ['EYW', 'JFK'],
        ['EYW', 'EWR'],
        ['JFK', 'ICN'],
        ['LGA', 'ICN'],
        ['ICN', 'ORD'],
        ['ICN', 'EWR'],
        ['JFK', 'DSM'],
        ['ICN', 'JFK'],
        ['ORD', 'DSM'],
        ['DSM', 'LGA'],
        ['JFK', 'LGA'],
        ['JFK', 'HND'],
        ['SFO', 'SIN'],
        ['SFO', 'CDG'],
        ['SFO', 'LHR'],
        ['LHR', 'DEL'],
        ['DEL', 'BGI'],
        ['DEL', 'DOH'],
        ['DOH', 'SAN']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 8', () => {
    const expected = 4;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['LGA', 'DSM'],
        ['DSM', 'ORD'],
        ['EYW', 'JFK'],
        ['EYW', 'EWR'],
        ['JFK', 'ICN'],
        ['LGA', 'ICN'],
        ['ICN', 'ORD'],
        ['ICN', 'EWR'],
        ['JFK', 'DSM'],
        ['ICN', 'JFK'],
        ['ORD', 'DSM'],
        ['DSM', 'LGA'],
        ['JFK', 'LGA'],
        ['JFK', 'HND'],
        ['SFO', 'SIN'],
        ['SFO', 'CDG'],
        ['SFO', 'LHR'],
        ['LHR', 'DEL'],
        ['DEL', 'BGI'],
        ['DEL', 'DOH'],
        ['DOH', 'SAN']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 9', () => {
    const expected = 3;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['LGA', 'DSM'],
        ['SIN', 'BGI'],
        ['SIN', 'CDG'],
        ['SIN', 'DEL'],
        ['SIN', 'DOH'],
        ['SIN', 'DSM'],
        ['SIN', 'EWR'],
        ['SIN', 'EYW'],
        ['SIN', 'HND'],
        ['SIN', 'ICN'],
        ['SIN', 'JFK'],
        ['SIN', 'LHR'],
        ['SIN', 'ORD'],
        ['SFO', 'SIN'],
        ['SFO', 'SAN']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 10', () => {
    const expected = 6;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['LGA', 'DSM'],
        ['DSM', 'ORD'],
        ['SIN', 'BGI'],
        ['SIN', 'CDG'],
        ['CDG', 'DEL'],
        ['DEL', 'DOH'],
        ['DEL', 'CDG'],
        ['DEL', 'EWR'],
        ['HND', 'ICN'],
        ['ICN', 'JFK'],
        ['JFK', 'LGA'],
        ['JFK', 'SFO'],
        ['EYW', 'LHR'],
        ['SFO', 'ORD'],
        ['SFO', 'LGA']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 11', () => {
    const expected = 3;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['LGA', 'DSM'],
        ['DSM', 'ORD'],
        ['SIN', 'BGI'],
        ['SIN', 'CDG'],
        ['CDG', 'DEL'],
        ['DEL', 'DOH'],
        ['DEL', 'CDG'],
        ['DEL', 'EWR'],
        ['HND', 'ICN'],
        ['ICN', 'JFK'],
        ['JFK', 'LGA'],
        ['JFK', 'SFO'],
        ['EYW', 'LHR'],
        ['SFO', 'ORD'],
        ['SFO', 'LGA'],
        ['SFO', 'SIN'],
        ['CDG', 'EYW'],
        ['LGA', 'SAN']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 12', () => {
    const expected = 0;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['LGA', 'DSM'],
        ['DSM', 'ORD'],
        ['SIN', 'BGI'],
        ['SIN', 'CDG'],
        ['CDG', 'DEL'],
        ['DEL', 'DOH'],
        ['DEL', 'CDG'],
        ['DEL', 'EWR'],
        ['HND', 'ICN'],
        ['ICN', 'JFK'],
        ['JFK', 'LGA'],
        ['JFK', 'SFO'],
        ['EYW', 'LHR'],
        ['SFO', 'ORD'],
        ['SFO', 'LGA'],
        ['SFO', 'SIN'],
        ['CDG', 'EYW'],
        ['ORD', 'HND'],
        ['HND', 'SAN'],
        ['LGA', 'TLV'],
        ['LGA', 'BUD']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 13', () => {
    const expected = 6;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['DSM', 'ORD'],
        ['ORD', 'BGI'],
        ['BGI', 'LGA'],
        ['SIN', 'CDG'],
        ['CDG', 'DEL'],
        ['DEL', 'DOH'],
        ['DOH', 'SIN'],
        ['EWR', 'HND'],
        ['HND', 'ICN'],
        ['ICN', 'JFK'],
        ['JFK', 'LGA'],
        ['EYW', 'LHR'],
        ['LHR', 'SFO'],
        ['SFO', 'SAN'],
        ['SAN', 'EYW']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 14', () => {
    const expected = 6;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['DSM', 'ORD'],
        ['ORD', 'BGI'],
        ['BGI', 'LGA'],
        ['SIN', 'CDG'],
        ['CDG', 'DEL'],
        ['DEL', 'DOH'],
        ['DOH', 'SIN'],
        ['EWR', 'HND'],
        ['HND', 'ICN'],
        ['ICN', 'JFK'],
        ['JFK', 'LGA'],
        ['EYW', 'LHR'],
        ['LHR', 'SFO'],
        ['SFO', 'SAN'],
        ['SFO', 'ORD'],
        ['SAN', 'EYW']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

  it('Test Case 15', () => {
    const expected = 5;
    const {airports, routes, startingAirport} = {
      'airports': [
        'BGI',
        'CDG',
        'DEL',
        'DOH',
        'DSM',
        'EWR',
        'EYW',
        'HND',
        'ICN',
        'JFK',
        'LGA',
        'LHR',
        'ORD',
        'SAN',
        'SFO',
        'SIN',
        'TLV',
        'BUD'
      ],
      'routes': [
        ['DSM', 'ORD'],
        ['ORD', 'BGI'],
        ['BGI', 'LGA'],
        ['SIN', 'CDG'],
        ['CDG', 'DEL'],
        ['DEL', 'DOH'],
        ['DOH', 'SIN'],
        ['EWR', 'HND'],
        ['HND', 'ICN'],
        ['ICN', 'JFK'],
        ['JFK', 'LGA'],
        ['EYW', 'LHR'],
        ['LHR', 'SFO'],
        ['SFO', 'SAN'],
        ['SFO', 'DSM'],
        ['SAN', 'EYW']
      ],
      'startingAirport': 'LGA'
    };

    expect(airportConnections(airports, routes, startingAirport)).toEqual(expected);
  });

});