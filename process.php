<?php 
        $to = "vsingh@royalladv.com";
        $subject = "Royalladv Contact Request";
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $mailmsg = $_POST['message'];
        $message = '<div style="width:500px;border:1px solid #222222;margin: 0 auto;"><div style="background:#222222;text-align:center;padding:10px 0 10px 0"><img id="logo" src="img/logo.svg" alt="logo" with="132" height="49"></div>';
        $message .= '<div style="padding:5px;"><div><strong>Request From '.$name.'</strong></div>';
        $message .= '<div></div>';
        $message .= '<div>Name: '.$name.'</div>';
        $message .= '<div>Email: '.$email.'</div>';
        $message .= '<div>Phone: '.$phone.'</div></div>';
        $message .='</hr>';
        $message .='<div>'.$mailmsg.'</div></div>';
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\b";
        $headers .= 'From: Royalladv' . "\r\n";
        if($email!=''){
            if(mail($to, $subject, $message, $headers)){
                header("Location: thank-you.html");
            } else{
                header("Location: contact.html");
            }
        }else{
                header("Location: contact.html");
            }
?>