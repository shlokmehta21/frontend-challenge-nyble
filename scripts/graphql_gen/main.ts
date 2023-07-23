import Api from './api/api.js';
import CodeGenerator from './generators/web/codeGenerator.js';
import { IntrospectedSchema } from './introspector/introspectedModel.js';

const main = async () => {
  const endpoint = 'http://0.0.0.0:3000/fedd';
  const api = new Api(endpoint);
  const introspectedSchema = new IntrospectedSchema(api);

  await introspectedSchema.create();

  //console.log(introspectedSchema.responseObjectTypes);
  const codeGenerator = new CodeGenerator(introspectedSchema);
  codeGenerator.generate();
};

main();
