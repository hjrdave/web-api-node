import { format } from 'prettier';

const handleRes = (err, result) => {
    if (err) {
        res.status(400).send(JSON.stringify(err));
    }
    res.status(200).send(format(JSON.stringify(result.rows), { semi: false, parser: "json" }));
};

export default handleRes;