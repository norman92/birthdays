exports.list_all_tasks = function(req, res) {
    return [];
  };
  
  exports.create_a_task = function(req, res) {
      return req.body;
  };
  
  exports.update_a_task = function(req, res) {
      return req.body;
  };
    
    
  exports.delete_a_task = function(req, res) {
        res.json({ message: 'Task successfully deleted' });
  };  