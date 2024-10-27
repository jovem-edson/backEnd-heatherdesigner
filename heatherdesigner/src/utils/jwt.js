import jwt from 'jsonwebtoken'
const KEY = '===!!HeatherDesigner=='
                  




export function gerarToken(userInfo) {
  return jwt.sign(userInfo, KEY)
}


export function autenticar(req, resp, next) {
  return autenticacao(req, resp, next);
}





export function autenticacao(req, resp, next) {
  try {
    let token = req.headers['x-access-token'];

    if (token === undefined)
      token = req.query['x-access-token']

    let signd = jwt.verify(token, KEY);

    req.user = signd;
    
    next();

  } catch (e) {
    resp.status(401).end();
  }
}
