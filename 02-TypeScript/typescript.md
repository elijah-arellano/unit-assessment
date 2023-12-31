
# TypeScript #
- TypeScript = JavaScript + Type Safety
- Any JS code is by default valid typescript


## Setup a typescript application ##
- Create a folder (ex: ts-app)
- change directory (cd) to the newly created folder
- Run the following commands
    - > npm init -y
    - > npm install typescript --save-dev
    - > npx tsc --init
- Modify the package.json file to add the following in the "scripts" section
    - > "build" : "tsc --watch"
- Run the following command to initiate the continuous build process
    - > npm run build

## TypeScript Features ##
- Access modifiers (public, private, protected etc)
- Interfaces
- Enums
- Generics

## Modules ##
- By default, everything defined in a file (ts/js) is considered PRIVATE
- Any public entity has to be explicitly exported (using the "export" keyword)
- To use any public entity from a different file, it has to be explicitly "imported" (using the "import" keyword)

