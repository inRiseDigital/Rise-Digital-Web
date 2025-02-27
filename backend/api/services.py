from django.core.mail import send_mail



def send_email(subject:str, message:str, from_email:str, to_email="pinildissanayaka@gmail.com"):
    send_mail(
        subject=subject,
        message=message,
        from_email=from_email,
        to_email=[to_email],
        fail_silently=False,
    )