/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("helloworld", {
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

  //
  start: function() {
    var self = this;
    setInterval(function() {
      self.updateDom(); // no speed defined, so it updates instantly.
    }, 5000); //perform every 5000 milliseconds.
  },

  // Displaying skill in the mirror
  getDom: function() {
    Log.log("Updating Hello World");
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.skills[this.index];
    this.index = (this.index + 1) % 6;
    return wrapper;
  }
  /*getTemplate: function () {
		return "helloworld.njk"
	},

	getTemplateData: function () {
		return this.config
	}*/
});
