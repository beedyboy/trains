
  const client = (name: string) => 
    //   console.log({ name });
    `
    <!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN”
        “https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>

    <html xmlns=“https://www.w3.org/1999/xhtml”>

    <head> 
        <meta http–equiv=“Content-Type” content=“text/html; charset=UTF-8” />  
        <meta http–equiv=“X-UA-Compatible” content=“IE=edge” />

        <meta name=“viewport” content=“width=device-width, initial-scale=1.0 “ />
    <style>
    .container {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 60%;
        margin: 5% auto;
        padding-bottom: 1em;
        font-family: arial; 
    }
    @media screen and (max-width: 780px) {
        .container{
            width: 100%;
        }
    }
    </style> 

        </head>

        <body>
        <div class="container">
        <p>Hi ${name} </p>
    We are thrilled that you contacted us here at Train Lead Consult. We got your mail and we will get 
    in touch with you as soon as possible.

    <p>
    Regards,

    <br />
    Train Lead Consult

    </p>

        </div>


        </body>
        
        </html>
`;
   
const contact = {client};

export default contact;
