export class PJ {
  public static build(id: string, jsonObject: any): void {
    if (typeof jsonObject !== 'object') {
      throw console.error('Input should be of type object only.');
    } else {
      const keys: string[] = Object.keys(jsonObject);
      if (keys.includes('pj_conf')) {
        const pj_config: any = jsonObject.pj_config;
        const configKeys: string[] = Object.keys(pj_config);
        for (const key of configKeys) {
          if (!(key in keys)) {
            continue;
          }
          this.render(id, pj_config.key, jsonObject.key);
        }
      } else throw console.error('pretty json congif does not exist.');
      ;
    }
  }

  private static render(id: string, tag: string, content: string): void {
    const element: HTMLElement = document.createElement(tag);
    element.innerText = content;
    document.getElementById(id)?.appendChild(element);
  }
}
