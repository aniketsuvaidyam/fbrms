frappe.ui.form.on("Block", {
    // state: function (frm) {
    //     frm.fields_dict["district"].get_query = function (doc) {
    //       return {
    //         filters: {
    //           state: frm.doc.state,
    //         },
           
    //       };
    //     },
        state: function(frm) {
            frm.set_query('district', function() {
                return {
                    filters: {
                        state: frm.doc.state
                    }
                };
            });
      
      }

    
});


