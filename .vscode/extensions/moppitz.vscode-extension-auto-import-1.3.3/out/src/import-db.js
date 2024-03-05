"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImportDb {
    static get count() {
        return ImportDb.imports.length;
    }
    static all() {
        return ImportDb.imports;
    }
    static getImport(name) {
        return ImportDb.imports.filter(i => i.name === name);
    }
    static delete(request) {
        try {
            let index = ImportDb.imports.findIndex(m => m.file.fsPath === request.file.fsPath);
            if (index !== -1) {
                ImportDb.imports.splice(index, 1);
            }
        }
        catch (error) {
        }
    }
    static saveImport(name, data, file) {
        name = name.trim();
        if (name === '' || name.length === 1) {
            return;
        }
        let obj = {
            name,
            file
        };
        let exists = ImportDb.imports.findIndex(m => m.name === obj.name && m.file.fsPath === file.fsPath);
        if (exists === -1) {
            ImportDb.imports.push(obj);
        }
    }
}
ImportDb.imports = new Array();
exports.ImportDb = ImportDb;
//# sourceMappingURL=import-db.js.map