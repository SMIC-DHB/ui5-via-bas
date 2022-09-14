/*global QUnit*/

sap.ui.define([
	"walkthrough/controller/walkthroughApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("walkthroughApp Controller");

	QUnit.test("I should test the walkthroughApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
