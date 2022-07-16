import { Decrypt } from "data/protocols/cryptography";
import { decode, verify } from "jsonwebtoken";

import * as config from "config";

export class JwtAdapter implements Decrypt { 
  verifyToken(token: string): any { 
    const { secret } = config.get("jwt");
    verify(token, secret, (error: any) => !!error);
  }

  decrypt(data: string): string {
    const tokenObject  = decode(data) as TokenObject;
    return tokenObject.id;
  }


}

interface TokenObject { 
  id: string;
}