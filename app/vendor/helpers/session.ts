import fs, { readFile } from "fs";
class session {
  make(session: string, content: any) {
    return new Promise(async (res, rej) => {
      try {
        await fs.promises.writeFile(
          `public/storage/sessions/${session}`,
          JSON.stringify(content)
        );
        res(content);
      } catch (error) {
        rej(error);
      }
    });
  }
  read(session: string) {
    return new Promise(async (res, rej) => {
      try {
        const data = await fs.promises.readFile(
          `public/storage/sessions/${session}`,
          "utf-8"
        );
        res(JSON.parse(data));
      } catch (error) {
        rej(error);
      }
    });
  }
}

export default new session();
