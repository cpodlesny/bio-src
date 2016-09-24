class ContactController {
  constructor() {
    this.name     = 'Contact';
    this.contacts = [
      {
        "entity": "+380 067 688 30 78",
        "type": "call",
        "action": "call_made",
        "obj": "tel:+3800676883078"
      },

      {
        "entity": "podlesny@outlook.com",
        "type": "email",
        "action": "call_made",
        "obj": "mailto:podlesny@outlook"
      }
    ];
  }
}

export default ContactController;
