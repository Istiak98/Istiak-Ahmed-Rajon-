import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2/dist/sweetalert2.js";
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6tgsb6p",
        "template_j40ng2a",
        e.target,
        "user_DZLPrBovrdUfCVpESfE3S"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    Swal.fire({
      icon: "success",
      title: "Message sent successfully",
    });
  }
  return (
    <div class="container overflow-hidden">
      <h1>
        <span className="rajon">CONTACT</span> ME
      </h1>

      <div class="row gx-5" id="contact">
        <div class="col ">
          <div class="p-3">
            <div class="row">
              <div class="col-lg-12 col-lg-offset-2 ">
                <form
                  id="contact-form"
                  method="post"
                  action=""
                  role="form"
                  onSubmit={sendEmail}
                >
                  <div class="messages"></div>

                  <div class="controls">
                    <div class="row">
                      <div class="col-md-6 ">
                        <div class="form-group text-start">
                          <label for="form_name">Firstname *</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Please enter your firstname *"
                            required="required"
                            data-error="Firstname is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group text-start">
                          <label for="form_lastname">Lastname *</label>
                          <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            class="form-control"
                            placeholder="Please enter your lastname *"
                            required="required"
                            data-error="Lastname is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group text-start">
                          <label for="form_email">Email *</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Please enter your email *"
                            required="required"
                            data-error="Valid email is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group text-start">
                          <label for="form_phone">Phone</label>
                          <input
                            id="form_phone"
                            type="tel"
                            name="phone"
                            class="form-control"
                            placeholder="Please enter your phone"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group text-start">
                          <label for="form_message">Subject*</label>
                          <textarea
                            id="form_message"
                            name="message"
                            class="form-control"
                            placeholder="Subject *"
                            rows="2"
                            required
                            data-error="Please,leave us a message."
                          ></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group text-start">
                          <label for="form_message">Message *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            class="form-control"
                            placeholder="Message for me *"
                            rows="4"
                            required
                            data-error="Please,leave us a message."
                          ></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12 mt-2">
                        <input
                          type="submit"
                          class="btn btn-dark btn-send"
                          value="Send message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
