export default abstract class Dto {
  constructor(
    private readonly statusCode: number,
    private readonly message: string,
    private readonly data: any,
    private readonly error: any,
  ) {}
}
