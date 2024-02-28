// Suppose you’re given a schema of the following format. This schema describes
// the specification for a JSON blob:

const schema = {
  employee: [
    { name: "name", required: true, type: "string" },
    { name: "title", required: true, type: "string" },
    { name: "salary", required: true, type: "number" },
    { name: "remote", required: false, type: "boolean" },
    { name: "reports", required: false, type: "array:employee" },
    { name: "cars", required: false, type: "array:car" },
  ],
  car: [
    { name: "year", required: true, type: "number" },
    { name: "make", required: true, type: "string" },
    { name: "model", required: true, type: "string" },
  ],
};

// Note that the schema can contain multiple types that form a graph.

// Given this schema, write a function that returns `true` if a given array contains objects that
// satisfy the given schema.

// Here’s an example of an array that *does* satisfy the schema:

const objects = [
  {
    name: "alice",
    title: "ceo",
    salary: 100,
    reports: [
      {
        name: "bob",
        title: "cfo",
        salary: 10,
        reports: [{ name: "zorp", title: "controller", salary: 40 }],
      },
    ],
    cars: [
      {
        year: 2020,
        make: "Toyota",
        model: "Prius",
      },
    ],
  },
];

// Please return a boolean indicating whether the objects passed or failed schema validation.

function validates(objects, schema, rootType) {
  return objects.every((object) => validate(object, schema, rootType));
}

function validate(object, schema, rootType) {
  const rootSchema = schema[rootType];

  for (const field of rootSchema) {
    const { name, required, type } = field;

    if (required && !(name in object)) return false;

    if (name in object) {
      const value = object[name];

      if (typeCheck(value, type, schema) === false) return false;
    }
  }

  return true;
}

function typeCheck(value, type, schema) {
  switch (type) {
    case "string":
      return typeof value === "string";
    case "number":
      return typeof value === "number";
    case "boolean":
      return typeof value === "boolean";
    default:
      const [isArray, customType] = type.split(":"); // array:car => "car"

      return isArray
        ? validates(value, schema, customType)
        : validate(value, schema, customType);
  }
}

console.log(validates(objects, schema, "employee"));
