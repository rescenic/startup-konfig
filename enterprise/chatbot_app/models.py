from django.db import models
from django.contrib.auth.models import User
from datetime import datetime


class Organization(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Space(models.Model):
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name="spaces"
    )


class CurrentUserSpace(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="user_spaces"
    )
    space = models.OneToOneField(
        Space, on_delete=models.CASCADE, related_name="user_spaces"
    )


class Chat(models.Model):
    space = models.ForeignKey(Space, on_delete=models.CASCADE, related_name="chats")
    name = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.name:
            self.name = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
        super(Chat, self).save(*args, **kwargs)


MEMBERSHIP_ROLES = (
    ("owner", "Owner"),
    ("admin", "Admin"),
    ("user", "User"),
)


class Membership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="memberships")
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name="memberships"
    )
    role = models.CharField(max_length=5, choices=MEMBERSHIP_ROLES)


class Message(models.Model):
    user_message = models.TextField()
    bot_message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name="messages")