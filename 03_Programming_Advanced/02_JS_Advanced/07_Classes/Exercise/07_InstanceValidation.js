class CheckingAccount {
  constructor(clientId, email, firstName, lastName) {
    this.clientId = clientId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set clientId(value) {
    const pattern = /^\d{6}$/;

    if (!pattern.test(value)) {
        throw new TypeError('Client ID must be a 6-digit number');
    }

    this._clientId = value;
  }

  set email(value) {
    const pattern = /^\w+@[\w\\.]+$/;

    if (!pattern.test(value)) {
        throw new TypeError('Invalid e-mail');
    }

    this._email = value;
  }

  set firstName(value) {
    if (value.length < 3 || value.length > 20) {
        throw new TypeError('First name must be between 3 and 20 characters long');
    }

    const pattern = /^[A-Za-z]+$/;

    if (!pattern.test(value)) {
        throw new TypeError('First name must contain only Latin characters');
    }

    this._firstName = value;
  }

  set lastName(value) {
    if (value.length < 3 || value.length > 20) {
        throw new TypeError('Last name must be between 3 and 20 characters long');
    }

    const pattern = /^[A-Za-z]+$/;

    if (!pattern.test(value)) {
        throw new TypeError('Last name must contain only Latin characters');
    }

    this._lastName = value;
  }

}