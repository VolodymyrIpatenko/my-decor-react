import emailjs from 'emailjs-com';

export default function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_08bxowc',
      'template_wzku9hr',
      e.target,
      '3SDHZ_wnfkYeO2bfX'
    )
    .then(
      result => {
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      },
      error => {
        console.log(error.text);
      }
    );
}
