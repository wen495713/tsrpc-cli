export const i18nEnUs = {
    welcome: 'https://npmjs.com/tsrpc\nWelcome to tsrpc utilities V${version}',
    help: `
Usage：

    tsrpc proto <options>                Generate proto file
        -i, --input <file>                  Input TS file (support glob expression)
                                            It would generate all exported types
        -o, --output <file>                 Output file (or print to CLI)
        -c, --compatible <file>             Compatible mode, compatible to old proto (=output by default)
        --new                               Generate fresh new proto (no compatible)
        --ugly                              Output as ugly JSON (no indent and smaller)
        --verbose                           Show debug info
        --ignore <glob>                     Files to be ignored from --input

    tsrpc api <options>                  Generate TSRPC API implementations
        -i, --input <file>                  Proto file path (proto.ts or proto.json)
        -o, --output <folder>               Output api folder path
    
    tsrpc sync --from <dir> --to <dir>   Sync directory content as readonly

    tsrpc link --from <dir> --to <dir>   Create symlink

    tsrpc build <options>                构建 TSRPC 后端项目
        --proto <protoPath>                 proto 文件地址，默认为 src/shared/protocols/serviceProto.ts
        --proto-dir <folder>                protocols 目录，默认为 serviceProto.ts 所在目录


    tsrpc encode <options> [exp]         Encode a JS expression or a file (content is JS expression)
        [exp]                               Expression to encode (e.g. "123" "new Uint8Array([1,2,3])")
        -p, --proto <file>                  Proto file to use
        -s, --schema <id>                   SchemaID (filePath/TypeName)
        -i, --input <file>                  Input file path, alternative to [exp]
        -o, --output <file>                 Output file path (or print to CLI)
        --verbose                           Show debug info
                                            
    tsrpc decode <options> [binstr]      Decode buffer
        [binstr]                            Buffer to decode, hex string, like "0F A2 E3"
        -p, --proto <file>                  Proto file
        -s, --schema <id>                   SchemaID (filePath/TypeName)
        -i, --input <file>                  Input file path, alternative to [binstr]
        -o, --output <file>                 Output file path (or print to CLI)
        --verbose                           Show debug info

    tsrpc validate <options> [exp]       Validate if a JS expression is valid to a schema
        [exp]                               Expression to validate (e.g. "123" "new Uint8Array([1,2,3])")
        -p, --proto <file>                  Proto file to use
        -s, --schema <id>                   SchemaID (filePath/TypeName)
        -i, --input <file>                  Input file path, alternative to [exp]

    tsrpc show <file>                    Show a binary file as hex string
`.trim(),
    example: `
Example：

    tsrpc proto -i proto -o proto.ts

    tsrpc encode -p proto.json -s a/b/c/TypeName -o buf.bin "{value: 1}"
    tsrpc decode -p proto.json -s a/b/c/TypeName "01 0A 01"
    tsrpc validate -p proto.json -s a/b/c/TypeName "{value: 1}"
    tsrpc show buf.bin
`.trim(),
    errCmd: 'Error command, use "tsrpc -h" to see more help info.',
    missingParam: 'Missing parameter ${param}, use "tsrpc -h" to see more help info.',
    shouldBeDir: '${path} should be a directory',
    protoSucc: '✔ Proto generated to: ${output}',
    fileNotExists: 'File not exists: ${file}',
    fileOpenError: 'Failed to open file: ${file}',
    jsParsedError: 'Failed to parse JS expression from: ${file}',
    invalidProtoExt: '旧 ServiceProto 格式非法，仅支持 .ts 和 .json 文件: ${file}',
    protoParsedError: 'Failed to parse old proto: ${file}',
    expParsedError: 'Invalid JS expression',
    or: 'or',
    and: 'and',
    encodeSucc: '✔ Encoded succ to: ${output}',
    decodeSucc: '✔ Decoded succ to: ${output}',
    apiSucc: '✔ Api${apiName} generated: ${apiPath}',
    allApiSucc: '✔ Success，${newCount} new API generated',
    validateSucc: '✔ Validate succ',
    validateFail: '× Validate fail: ${msg}',
    error: ' ERROR ',
    success: ' SUCCESS ',
    helpGuide: 'Use "tsrpc -h" to see more help info.',
    compatibleError: 'Failed to keep compatible with old proto: \n\t|- ${innerError}',
    canOptimizeByNew: (oldProtoPath: string) => `Redundancy in ServiceProto is detected, delete '${oldProtoPath}' manually to optimize this, but it would cause incompatibility between the latest and older protocol. `,
    dirNotExists: 'Directory not exists: ${dir}',
    codeError: 'Build TypeScript failed, please fix code error',
    ifUpdateProto: 'A protocol change is detected, do you need to regenerate ServiceProto?',
    ifSyncNow: 'Execute "npm run sync" after generated successfully?',
    syncFailed: 'Execute "npm run sync" failed, you can manually finish syncing.',
    deleteConfirm: '${target}\nis existed already，delete it and continue?',
    canceled: 'CANCELED',
    confInvalid: 'Invalid TSRPC config file: ${path}',
    missingConfigItem: (itemName: string) => `Missing '${itemName}' in config file`,
    nothingSyncConf: `'sync' is not configurated in the config file`,
    syncedSucc: '✔ Synced successfully',
    allSyncedSucc: '✔ All Synced successfully',
    copy: 'Copy Files:',
    link: 'Create Symlink:',
    linkedSucc: '✔ Linked successfully',
    allLinkedSucc: '✔ All linked successfully',
}