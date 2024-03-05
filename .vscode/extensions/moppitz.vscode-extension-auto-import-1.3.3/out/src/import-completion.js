"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_helper_1 = require("./helpers/path-helper");
const import_db_1 = require("./import-db");
const import_fixer_1 = require("./import-fixer");
const vscode = require("vscode");
class ImportCompletion {
    constructor(context, enabled) {
        this.context = context;
        this.enabled = enabled;
        let fixer = vscode.commands.registerCommand('extension.resolveImport', (args) => {
            new import_fixer_1.ImportFixer().fix(args.document, undefined, undefined, undefined, [args.imp]);
        });
        context.subscriptions.push(fixer);
    }
    provideCompletionItems(document, position, token) {
        if (!this.enabled) {
            return Promise.resolve([]);
        }
        return new Promise((resolve, reject) => {
            let wordToComplete = '';
            let range = document.getWordRangeAtPosition(position);
            if (range) {
                wordToComplete = document.getText(new vscode.Range(range.start, position)).toLowerCase();
            }
            return resolve(import_db_1.ImportDb.all().filter(f => f.name.toLowerCase().indexOf(wordToComplete) > -1)
                .map(i => this.buildCompletionItem(i, document)));
        });
    }
    buildCompletionItem(imp, document) {
        let path = this.createDescription(imp, document);
        return {
            label: imp.name,
            kind: vscode.CompletionItemKind.Reference,
            detail: `import ${imp.name} (Auto-Import)`,
            documentation: `Import ${imp.name} from ${path}`,
            command: { title: 'AI: Autocomplete', command: 'extension.resolveImport', arguments: [{ imp, document }] }
        };
    }
    createDescription(imp, document) {
        let path = (imp) => {
            if (imp.file.discovered) {
                return imp.file.fsPath;
            }
            else {
                let rp = path_helper_1.PathHelper.normalisePath(path_helper_1.PathHelper.getRelativePath(document.uri.fsPath, imp.file.fsPath));
                return rp;
            }
        };
        return path(imp);
    }
}
exports.ImportCompletion = ImportCompletion;
//# sourceMappingURL=import-completion.js.map