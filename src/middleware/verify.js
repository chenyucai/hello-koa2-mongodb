export default async (ctx, next) => {
  console.log('verify')
  await next();
}