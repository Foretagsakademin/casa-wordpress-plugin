(()=>{var a,t={157:(a,t,e)=>{"use strict";e(222);jQuery((function(){}))},222:()=>{function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(t)}!function(t){"use strict";t((function(){var e,n;function i(){var a=t("#add_new_participant");if(a.length){var e=a.data("status"),n=+t(".js-contact_participant:visible").length;if("reserved"===e)return void a.removeAttr("disabled");n>=+a.data("available-seats")?a.prop("disabled",!0):a.removeAttr("disabled")}}(t("#booking_event_date").on("change",(function(){var a,e=t(this).find('option[data-id="'.concat(t(this).val(),'"]')),n=t("#fa-book__form");e&&(t(n).find("#event-id").val(t(e).data("id")),t(n).find("#event-status").val(t(e).data("status")),t(n).find(".js-modal__submit .btn_title").text(t(e).data("title")),t("#add_new_participant").data("available-seats",t(e).data("available-seats")).data("status",t(e).data("status")).data("max-participants",t(e).data("max-participants")),t("#event_status_message").html(t(e).data("status-message")),a={title:t(e).data("name"),date:t(e).data("date-start")},t(".js-event__date-title").html(a.title),t(".js-event__date-start").html(a.date),"booked"===t(e).data("status")&&function(a){var e=+t(a).data("available-seats"),n=+t(".js-contact_participant:visible").length-e;if(n>0)for(var i=0;i<n;i++)t(".js-contact_participant").last().remove()}(e),i())})),t("body").on("click",".contact_participant-template .js-participant-remove",(function(){var a=t(this).data("status"),e=t(this).closest(".contact_participant-template");t(e).remove(),"reserved"!==a&&i()})),t("#dietary_preferences").on("change",(function(){var a=t(this).closest(".row").find(".js-dietary_preferences_custom #dietary_preferences_custom");t(this).val()?(a.attr("disabled",!0),a.val("")):a.attr("disabled",!1)})),t("#add_new_participant").on("click",(function(){var a=t("#participant_template").html(),e=t(this).data("status");a=a.replaceAll("{%number%}",(Math.random()+1).toString(36).substring(7)),"reserved"!==e?(t("#participant_template").before(a),i()):t("#participant_template").before(a)})),t("#corporate_name").on("blur",(function(){var a,e,n,i,o=t(this).val();if(0!==o.length){var s=null!==(a=null===(e=casa_courses_config)||void 0===e?void 0:e.restUrl)&&void 0!==a?a:"",r=null!==(n=null===(i=casa_courses_config)||void 0===i?void 0:i.ajax_nonce)&&void 0!==n?n:"";t.ajax({url:s+"companies/",type:"post",beforeSend:function(a){a.setRequestHeader("X-WP-Nonce",r)},data:{ajax_nonce:r,company_name:o},success:function(a){if(!0===a.success){var e,n,i,o,s,r,c,l,d,p=a.data.message,u=a.data.result;if(p)if(window.confirm(p))(null===(e=u.id)||void 0===e?void 0:e.length)>0&&t("#company_id").val(u.id),(null===(n=u.address)||void 0===n||null===(n=n.address_row_1)||void 0===n?void 0:n.length)>0&&t("#invoice_address").val(u.address.address_row_1),(null===(i=u.address)||void 0===i||null===(i=i.city)||void 0===i?void 0:i.length)>0&&t("#city").val(u.address.city),(null===(o=u.address)||void 0===o||null===(o=o.zip_code)||void 0===o?void 0:o.length)>0&&t("#zip_code").val(u.address.zip_code),(null===(s=u.address)||void 0===s||null===(s=s.email)||void 0===s?void 0:s.length)>0&&t("#e_invoice_address").val(u.address.email),(null===(r=u.corporate_id)||void 0===r?void 0:r.length)>0&&(null===(c=t("#corporate_id"))||void 0===c||c.val(u.corporate_id)),(null===(l=u.sector)||void 0===l?void 0:l.length)>0&&(null===(d=t("#industry"))||void 0===d||d.val(u.sector))}}})}})),t("#contact_is_participant").on("change",(function(){if(t(this).is(":checked")){var a;+t(".js-contact_participant:visible").length-+t("#add_new_participant").data("available-seats")==0&&t(".js-contact_participant").last().remove();var e=t("#contact_participant_template").html(),n=t(".js-contact_participant:visible").length;null===(a=t(".js-contact_participant:visible"))||void 0===a||null===(a=a.first())||void 0===a||a.remove(),t("#contact_participant_template").before(e),t("#p-first-name0").val(t("#first-name").val()),t("#p-last-name0").val(t("#last-name").val()),t("#p-email0").val(t("#email").val()),t("#p-phone0").val(t("#phone").val()),n||i()}else t("#contact_participant").remove(),i()})),t("#first-name").on("focusout",(function(){t("#p-first-name0").val(t(this).val())})),t("#last-name").on("focusout",(function(){t("#p-last-name0").val(t(this).val())})),t("#email").on("focusout",(function(){t("#p-email0").val(t(this).val())})),t("#phone").on("focusout",(function(){t("#p-phone0").val(t(this).val())})),null!==(e=casa_courses_config)&&void 0!==e&&e.google_recaptcha_enabled)?null===(n=grecaptcha)||void 0===n||n.ready((function(){t("#fa-book__form").on("submit",(function(a){var t,e=this;return a.preventDefault(),grecaptcha.execute(null===(t=casa_courses_config)||void 0===t?void 0:t.google_recaptcha,{action:"submit"}).then((function(a){s(e,a)})),!1}))})):t("#fa-book__form").on("submit",(function(a){return a.preventDefault(),s(this,null),!1}));function o(t,e){e.html("");var n="alert-success";if(!0!==t.success&&(n="alert-danger"),"object"===a(t.message))for(var i in t.message)Object.prototype.hasOwnProperty.call(t.message,i)&&r(i,t.message[i]);else e.append('<p class="alert '.concat(n,'" style="">').concat(t.message,"</p>"));e.show()}function s(a,e){var n,i,s,r,l=t(a).find(".alert-message"),d=t(a),p={};d.find(".is-invalid").removeClass("is-invalid");var u=null!==(n=null===(i=casa_courses_config)||void 0===i?void 0:i.restUrl)&&void 0!==n?n:"",v=null!==(s=null===(r=casa_courses_config)||void 0===r?void 0:r.ajax_nonce)&&void 0!==s?s:"";d.find(".submit").prop("disabled",!0),d.find(".js-modal__submit-spinner").show(),d.find("input,select").each((function(){var a=t(this),e=a.attr("name"),n=a.val();e.endsWith("[]")||(p[e]=n)})),p.participants=[],d.find('input[name="participant_first_name[]"]').each((function(){var a=t(this);p.participants.push({first_name:a.val()})}));for(var f=function(){var a=m[_];d.find(a.input).each((function(e){p.participants[e][a.property]=t(this).val()}))},_=0,m=[{property:"last_name",input:'input[name="participant_last_name[]"]'},{property:"email",input:'input[name="participant_email[]"]'},{property:"cell_phone_number",input:'input[name="participant_cell_phone_number[]"]'},{property:"dietary_preferences",input:'select[name="dietary_preference[]"]'},{property:"dietary_preferences_custom",input:'input[name="dietary_preferences_custom[]"]'}];_<m.length;_++)f();t.ajax({url:u+"connect-event",type:"post",beforeSend:function(a){a.setRequestHeader("X-WP-Nonce",v),e&&a.setRequestHeader("X-recaptcha-response",e)},data:{ajax_nonce:v,form_data:p},success:function(a){if(!0===a.success){var e=a.data;l.show(),l.html('<p class="alert alert-success">'.concat(e.message,"</p>")),t("#fa-book__form").trigger("reset"),t(d).find(".submit").addClass("disabled").prop("disabled",!0),function(a,e){t(".casa-form__section").hide(),t(".casa-form__submit-section").show(),"booked_on_event"in e&&e.booked_on_event.length>0&&c(a,e.booked_on_event,t("#js-booked__participants"));"not_booked_on_event"in e&&e.not_booked_on_event.length>0&&c(a,e.not_booked_on_event,t("#js-not_booked__participants"))}(e.labels,e.participants)}else o(a.data,l)},error:function(a){500===a.status?(a.message,t(".casa-form__section").hide(),t(".casa-form__error-section").show()):o(a.responseJSON.data,l)},complete:function(){t(d).find(".submit").prop("disabled",!1),t(d).find(".js-modal__submit-spinner").hide()}})}function r(e,n){switch(e){case"participants":!function(a){if(Array.isArray(a)&&"string"!=typeof a[0])a.forEach((function(a,e){!function(a,e){var n=t(".js-contact_participant");if(n&&void 0!==n[e]){if(void 0!==a.participant)for(var i in a.participant){var o=t(n[e]).find('[name*="participant_'.concat(i,'"]')),s=o.siblings(".invalid-feedback");t(o).addClass("is-invalid"),t(s).html(a.participant[i][0])}void 0!==a.dietary_preference&&t(n[e]).find('[name^="dietary_preference"]').addClass("is-invalid").siblings(".invalid-feedback").html(a.dietary_preference[0])}}(a,e)}));else for(var e in a)Array.isArray(a[e])?t(".alert-message").append('<p class="alert alert-danger">'.concat(a[e][0],"</p>")):t(".alert-message").append('<p class="alert alert-danger">Participants: '.concat(a[0],"</p>"))}(n);break;case"company":!function(e){if("object"===a(e)){var n=t(".fa-book__form");for(var i in e){var o=t(n).find('[name*="company_'.concat(i,'"]')),s=o.siblings(".invalid-feedback");t(o).addClass("is-invalid"),t(s).html(e[i][0])}}else t(".alert-message").append('<p class="alert alert-danger">Company: '.concat(e[0],"</p>"))}(n);break;case"token":!function(a){grecaptcha.reset(),t(".alert-message").append('<p class="alert alert-danger">Token: '.concat(a[0],"</p>"))}(n)}}function c(a,e,n){e.forEach((function(e){var i=t("#template-book__participants").html(),o="";null!=e&&e.email&&(null==e?void 0:e.email.length)>0&&(o+="<li>".concat(a.email,": ").concat(e.email,"</li>")),null!=e&&e.cell_phone_number&&(null==e?void 0:e.cell_phone_number.length)>0&&(o+="<li>".concat(a.phone,": ").concat(e.cell_phone_number,"</li>")),null!=e&&e.participant_name&&(null==e?void 0:e.participant_name.length)>0&&(o+="<li>".concat(a.name,": ").concat(e.participant_name,"</li>")),null!=e&&e.status&&(null==e?void 0:e.status.length)>0&&(o+="<li>".concat(a.status,": ").concat(a[e.status],"</li>")),i=i.replaceAll("{%items%}",o),n.append(i)})),n.show()}i()}))}(jQuery)},800:()=>{},343:()=>{},900:()=>{}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,a=[],n.O=(t,e,i,o)=>{if(!e){var s=1/0;for(d=0;d<a.length;d++){for(var[e,i,o]=a[d],r=!0,c=0;c<e.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((a=>n.O[a](e[c])))?e.splice(c--,1):(r=!1,o<s&&(s=o));if(r){a.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=a.length;d>0&&a[d-1][2]>o;d--)a[d]=a[d-1];a[d]=[e,i,o]},n.n=a=>{var t=a&&a.__esModule?()=>a.default:()=>a;return n.d(t,{a:t}),t},n.d=(a,t)=>{for(var e in t)n.o(t,e)&&!n.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:t[e]})},n.o=(a,t)=>Object.prototype.hasOwnProperty.call(a,t),(()=>{var a={796:0,840:0,630:0,530:0};n.O.j=t=>0===a[t];var t=(t,e)=>{var i,o,[s,r,c]=e,l=0;if(s.some((t=>0!==a[t]))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var d=c(n)}for(t&&t(e);l<s.length;l++)o=s[l],n.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return n.O(d)},e=self.webpackChunk=self.webpackChunk||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))})(),n.O(void 0,[840,630,530],(()=>n(157))),n.O(void 0,[840,630,530],(()=>n(800))),n.O(void 0,[840,630,530],(()=>n(343)));var i=n.O(void 0,[840,630,530],(()=>n(900)));i=n.O(i)})();