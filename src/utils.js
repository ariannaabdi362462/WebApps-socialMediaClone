utils = {

    formDataToJSON(formData) {
  
      console.log(formData);
  
      var object = {};
  
      formData.forEach((value, key) => (object[key] = value))
  
      return JSON.stringify(object)
  
    },
  
  }