
export class LinuxConfig {
    
    public name: string = '';

    constructor(options: any = {}) {

        Object.keys(this).map((key) => {
            if(options[key] !== undefined) {
                switch(key) {
                default:
                    (<any>this)[key] = options[key];
                    break;
                }
            }
        });

    }

}
