module.exports = IFunnelService = require('typedef')

// THIS CODE WAS GENERATED BY AN AUTOMATED TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/grunt-infusionsoft
// Generated on Fri Aug 09 2013 00:43:59 GMT-0500 (CDT)

// Funnel Service is used to add contacts to your sequences
.interface('IFunnelService') .define({

    // Returns the result of a goal being achieved.
    __xmlrpc__achieveGoal: function(apiKey, Integration, CallName,
        contactId) {}

});