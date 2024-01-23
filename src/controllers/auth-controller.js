exports.register = (req, res, next) => {

     const {email, password } = req.body;

     res.json({ email, password });
};

exports.login = (req, res, next) => {
    const { email, password } = req.body;
    res.json({ email, password });
};

exports.forgerPassword = (req, res, next) => {

    const {email} = req.body;

    res.json({ email });
};



exports.verifyForgetPassword = (req, res, next) => {
    const { token } = req.params;
    //Logic check
    res.json({ token });
};

exports.resetPassword = (req, res, next) => {
    const { token } = req.params;
    const { password } = req.body;
    //เปลี่ยนรหัสผ่าน
    //เก็บรหัสผ่านใหม่
    res.json({ token, password });
};