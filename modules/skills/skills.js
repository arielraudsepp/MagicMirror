/* global Module */

/* Magic Mirror
 * Module: skills
 *
 *Displays DBT skills on the Magic Mirror that updates every minute
 */
Module.register("skills", {

  skills: [
    "Wise Mind",
    "Observe",
    "Describe",
    "Participate",
    "Be non-judgemental",
    "Be one mindful",
    "Be effective"
  ],
  index: 0,

  /* Checks the time to see if the minute is different. If it is, it updates the DOM (displaying the new skill) and increased the index of "skills" by 1
  */
  start: function() {
    let previousMin = new Date().getMinutes();
    let self = this;
    setInterval(function() {
     
      let currentMin = new Date().getMinutes();

      if (currentMin !== previousMin) {
        self.updateDom();
        self.index = (self.index + 1) % 6;
      }
      previousMin = currentMin;
      
    }, 5000); //perform every 5000 milliseconds.
    ;
  },

  // Displaying skill in the mirror
  getDom: function() {
    Log.log("Updating Skills");
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.skills[this.index];
    
    return wrapper;
  }
  /*getTemplate: function () {
		return "skills.njk"
	},

	getTemplateData: function () {
		return this.config
	}*/
});
