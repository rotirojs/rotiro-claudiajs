export function replaceVariables(path: string): string {
  let newPath: string = path;
  const vars: string[] = path.match(/\/:[a-zA-Z0-9._]+/g);

  if (vars && vars.length) {
    for (const varName of vars) {
      const regEx = new RegExp(varName);
      newPath = newPath.replace(regEx, `/{${varName.substr(2)}}`);
    }
  }

  return newPath;
}
