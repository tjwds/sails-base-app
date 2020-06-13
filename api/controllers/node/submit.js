module.exports = {


  friendlyName: 'Submit',


  description: 'Adds a node to the database.',


  extendedDescription:
`Takes any input and puts it in the database to be processed by editors`,


  // should depend on implementation
  inputs: {

    text: {
      required: true,
      type: 'string',
      description: 'Example text, but this could be whatever you want.',
    },

  },


  exits: {

    success: {
      description: 'OK.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'Invalid request.',
    },

  },


  fn: async function (inputs) {

    var text = inputs.text;

    await TextNode.create(_.extend({
      text: text,
    }))
    .intercept({name: 'UsageError'}, 'invalid');

  }

};
