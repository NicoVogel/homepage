import"./hoisted.2daoxv0f.js";const t=document.querySelector("[data-contact-us]");t&&(t.onsubmit=e=>{e.preventDefault();const o=e.target,n=o[0].value,a=o[1].value||"N/A",c=o[2].value,m=o[3].value,s=encodeURIComponent("Contact Form Submission"),l=encodeURIComponent(`Name: ${n}
Company Name: ${a}
Email: ${c}
Message:
${m}`);window.location.href=`mailto:hello@vogel-tec.dev?subject=${s}&body=${l}`});
