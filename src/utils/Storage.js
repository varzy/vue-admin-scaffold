export class Storage {
  constructor(type, uniqueKey = '') {
    this.uniqueKey = uniqueKey;
    this.storage = {
      local: window.localStorage,
      session: window.sessionStorage
    }[type];
  }

  set(key, val, { encrypt = false, withUniqueKey = true } = {}) {
    const formattedVal = JSON.stringify(val);
    const finalKey = withUniqueKey ? this._fullKeyName(key) : key;

    this.storage.setItem(finalKey, encrypt ? btoa(formattedVal) : formattedVal);
  }

  get(key, { decrypt = false, withUniqueKey = true } = {}) {
    const finalKey = withUniqueKey ? this._fullKeyName(key) : key;
    const originalValue = this.storage.getItem(finalKey);

    if (!originalValue) return null;

    return decrypt ? JSON.parse(atob(originalValue)) : JSON.parse(originalValue);
  }

  remove(key, { withUniqueKey = true } = {}) {
    const finalKey = withUniqueKey ? this._fullKeyName(key) : key;
    this.storage.removeItem(finalKey);
  }

  clear() {
    this.storage.clear();
  }

  _fullKeyName(key) {
    return `${this.uniqueKey}:${key}`;
  }
}

// vas = vue-admin-scaffold
export const ls = new Storage('local', 'vas');
export const ss = new Storage('session', 'vas');
