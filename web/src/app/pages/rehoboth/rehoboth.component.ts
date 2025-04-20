import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-rehoboth',
  templateUrl: './rehoboth.component.html',
  styleUrls: ['./rehoboth.component.scss']
})
export class RehobothComponent implements OnInit {

  enquiryForm = this.formBuilder.group({
    'name': '',
    'email': '',
    'phone': '',
    'enquiry': ''
  })

  applicationForm = this.formBuilder.group({
    'name': '',
    'email': '',
    'phone': '',
    'application':'',
    'results': ''
  })

  isLoading = false;

  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute ) { }

  ngOnInit(): void {


    if(this.router.fragment) {

      this.router.fragment.forEach((fragment) => {


        if (fragment == 'application-form') {
          setTimeout(() => {
            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
          }, 1000)
        }
      })

    }
  }

  onSubmit() {

    this.isLoading = true;

    emailjs.init({publicKey: "XZEJPwlCd2PaeyF36"});
    emailjs.send("service_rb4yp3n","template_f9d4b4g",{
      from_name: this.enquiryForm.value.name,
      to_name: "Admin",
      message: `Email: ${this.enquiryForm.value.email} Phone: ${this.enquiryForm.value.phone} Enquiry: ${this.enquiryForm.value.enquiry}`,
      reply_to: this.enquiryForm.value.email,
    })
    .then(data => {

      this.isLoading = false;

      if (data.text == 'OK') {

        alert('Enquiry sent successfully');
        this.enquiryForm.reset();

      }
      else {

        alert('an error occured please try again');

      }

    }).catch(err => {

      alert('an error occured please try again');
      this.isLoading = false;
      console.log(err);

    });

  }
}
