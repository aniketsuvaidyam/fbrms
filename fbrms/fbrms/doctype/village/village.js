// Copyright (c) 2023, fbrms and contributors
// For license information, please see license.txt

frappe.ui.form.on("Village", {
    // refresh(frm) {

    // },
    state: function (frm) {
        frm.set_query('district', function () {
            return {
                filters: {
                    state: frm.doc.state
                }
            };
        });
    },
    district: function (frm) {
        frm.set_query('block', function () {
            return {
                filters: {
                    district: frm.doc.district
                }
            };
        });
    }
});
