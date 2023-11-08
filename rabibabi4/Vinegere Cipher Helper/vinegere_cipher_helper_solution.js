function VigenèreCipher(key, abc) {
    let n = abc.length;
    let c, m, k;
    this.encode = function (str) {
        let key_ = key;
        while (key_.length < str.length) key_ += key;
        let buf = "";
        for (let i = 0; i < str.length; i++) {
            if (!abc.includes(str[i])) {
                buf += str[i];
            } else {
                m = abc.indexOf(str[i]);
                k = abc.indexOf(key_[i]);
                c = (m + k) % n;
                buf += abc[c];
            }
        }
        return buf;
    };
    this.decode = function (str) {
        let key_ = key;
        while (key_.length < str.length) key_ += key;
        let buf = "";
        
        for (let i = 0; i < str.length; i++) {
            if (!abc.includes(str[i])) {
                buf += str[i];
            } else {
                c = abc.indexOf(str[i]);
                k = abc.indexOf(key_[i]);
                m = (c - k + n) % n;
                buf += abc[m];
            }
        }
        return buf;
    };
}