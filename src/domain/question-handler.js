module.exports = {
  create: function() {
    return {
      Id: 'new',
      Text: 'The newest question',
    };
  },

  read: function(id) {
    return {
      Id: id,
      Text: 'Question text',
    };
  },
};
