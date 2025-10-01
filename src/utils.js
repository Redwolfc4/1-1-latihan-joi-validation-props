export function validatedProps(schema, props, componentName) {
  const validatedResult = schema.validate(props, { abortEarly: false });

  if (validatedResult.error) {
    const { details } = validatedResult.error;
    details.forEach((detailError) => {
      console.warn(`[${componentName}] validated Error : ${detailError.message}`);
    });
  }

  return validatedResult.value;
}
