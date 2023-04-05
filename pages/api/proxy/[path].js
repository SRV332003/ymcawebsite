import axios from "axios";

export default function handler (req, res) {
    const {path} = req.query;
    console.log(path);
    const url = `http://priyanshuverma.tech/${path}`;
    if (req.method === 'POST') {
        axios.post(url, req.body).then((response) => {
            res.status(200).json(response.data);
        });
    }
    else {
        axios.get(url).then((response) => {
            res.status(200).json(response.data);
        });
    }
}