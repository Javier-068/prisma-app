
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model orderdetail
 * 
 */
export type orderdetail = $Result.DefaultSelection<Prisma.$orderdetailPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model verificationtoken
 * 
 */
export type verificationtoken = $Result.DefaultSelection<Prisma.$verificationtokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const order_status: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type order_status = (typeof order_status)[keyof typeof order_status]


export const user_role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type user_role = (typeof user_role)[keyof typeof user_role]

}

export type order_status = $Enums.order_status

export const order_status: typeof $Enums.order_status

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.order.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderdetail`: Exposes CRUD operations for the **orderdetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orderdetails
    * const orderdetails = await prisma.orderdetail.findMany()
    * ```
    */
  get orderdetail(): Prisma.orderdetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationtoken`: Exposes CRUD operations for the **verificationtoken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verificationtokens
    * const verificationtokens = await prisma.verificationtoken.findMany()
    * ```
    */
  get verificationtoken(): Prisma.verificationtokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    order: 'order',
    orderdetail: 'orderdetail',
    Product: 'Product',
    user: 'user',
    verificationtoken: 'verificationtoken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "order" | "orderdetail" | "product" | "user" | "verificationtoken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      orderdetail: {
        payload: Prisma.$orderdetailPayload<ExtArgs>
        fields: Prisma.orderdetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderdetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderdetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          findFirst: {
            args: Prisma.orderdetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderdetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          findMany: {
            args: Prisma.orderdetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>[]
          }
          create: {
            args: Prisma.orderdetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          createMany: {
            args: Prisma.orderdetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.orderdetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          update: {
            args: Prisma.orderdetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          deleteMany: {
            args: Prisma.orderdetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderdetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.orderdetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          aggregate: {
            args: Prisma.OrderdetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderdetail>
          }
          groupBy: {
            args: Prisma.orderdetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderdetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderdetailCountArgs<ExtArgs>
            result: $Utils.Optional<OrderdetailCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      verificationtoken: {
        payload: Prisma.$verificationtokenPayload<ExtArgs>
        fields: Prisma.verificationtokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verificationtokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationtokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verificationtokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationtokenPayload>
          }
          findFirst: {
            args: Prisma.verificationtokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationtokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verificationtokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationtokenPayload>
          }
          findMany: {
            args: Prisma.verificationtokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationtokenPayload>[]
          }
          create: {
            args: Prisma.verificationtokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationtokenPayload>
          }
          createMany: {
            args: Prisma.verificationtokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.verificationtokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationtokenPayload>
          }
          update: {
            args: Prisma.verificationtokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationtokenPayload>
          }
          deleteMany: {
            args: Prisma.verificationtokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verificationtokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.verificationtokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificationtokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationtokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationtoken>
          }
          groupBy: {
            args: Prisma.verificationtokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationtokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.verificationtokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationtokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    order?: orderOmit
    orderdetail?: orderdetailOmit
    product?: ProductOmit
    user?: userOmit
    verificationtoken?: verificationtokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderdetail: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderdetail?: boolean | OrderCountOutputTypeCountOrderdetailArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderdetailWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orderdetail: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderdetail?: boolean | ProductCountOutputTypeCountOrderdetailArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderdetailWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    order: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | UserCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.order_status | null
    total: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.order_status | null
    total: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    status: number
    total: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    total?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    total?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    total?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.order_status
    total: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    total?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    orderdetail?: boolean | order$orderdetailArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type orderSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    total?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt" | "status" | "total", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    orderdetail?: boolean | order$orderdetailArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      orderdetail: Prisma.$orderdetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.order_status
      total: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderdetail<T extends order$orderdetailArgs<ExtArgs> = {}>(args?: Subset<T, order$orderdetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'String'>
    readonly userId: FieldRef<"order", 'String'>
    readonly createdAt: FieldRef<"order", 'DateTime'>
    readonly updatedAt: FieldRef<"order", 'DateTime'>
    readonly status: FieldRef<"order", 'order_status'>
    readonly total: FieldRef<"order", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.orderdetail
   */
  export type order$orderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    where?: orderdetailWhereInput
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    cursor?: orderdetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model orderdetail
   */

  export type AggregateOrderdetail = {
    _count: OrderdetailCountAggregateOutputType | null
    _avg: OrderdetailAvgAggregateOutputType | null
    _sum: OrderdetailSumAggregateOutputType | null
    _min: OrderdetailMinAggregateOutputType | null
    _max: OrderdetailMaxAggregateOutputType | null
  }

  export type OrderdetailAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type OrderdetailSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type OrderdetailMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    quantity: number | null
    price: number | null
  }

  export type OrderdetailMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    quantity: number | null
    price: number | null
  }

  export type OrderdetailCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    price: number
    _all: number
  }


  export type OrderdetailAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderdetailSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderdetailMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type OrderdetailMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type OrderdetailCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type OrderdetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderdetail to aggregate.
     */
    where?: orderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderdetails
    **/
    _count?: true | OrderdetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderdetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderdetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderdetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderdetailMaxAggregateInputType
  }

  export type GetOrderdetailAggregateType<T extends OrderdetailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderdetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderdetail[P]>
      : GetScalarType<T[P], AggregateOrderdetail[P]>
  }




  export type orderdetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderdetailWhereInput
    orderBy?: orderdetailOrderByWithAggregationInput | orderdetailOrderByWithAggregationInput[]
    by: OrderdetailScalarFieldEnum[] | OrderdetailScalarFieldEnum
    having?: orderdetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderdetailCountAggregateInputType | true
    _avg?: OrderdetailAvgAggregateInputType
    _sum?: OrderdetailSumAggregateInputType
    _min?: OrderdetailMinAggregateInputType
    _max?: OrderdetailMaxAggregateInputType
  }

  export type OrderdetailGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    quantity: number
    price: number
    _count: OrderdetailCountAggregateOutputType | null
    _avg: OrderdetailAvgAggregateOutputType | null
    _sum: OrderdetailSumAggregateOutputType | null
    _min: OrderdetailMinAggregateOutputType | null
    _max: OrderdetailMaxAggregateOutputType | null
  }

  type GetOrderdetailGroupByPayload<T extends orderdetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderdetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderdetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderdetailGroupByOutputType[P]>
            : GetScalarType<T[P], OrderdetailGroupByOutputType[P]>
        }
      >
    >


  export type orderdetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderdetail"]>



  export type orderdetailSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type orderdetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "quantity" | "price", ExtArgs["result"]["orderdetail"]>
  export type orderdetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $orderdetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderdetail"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      quantity: number
      price: number
    }, ExtArgs["result"]["orderdetail"]>
    composites: {}
  }

  type orderdetailGetPayload<S extends boolean | null | undefined | orderdetailDefaultArgs> = $Result.GetResult<Prisma.$orderdetailPayload, S>

  type orderdetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderdetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderdetailCountAggregateInputType | true
    }

  export interface orderdetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderdetail'], meta: { name: 'orderdetail' } }
    /**
     * Find zero or one Orderdetail that matches the filter.
     * @param {orderdetailFindUniqueArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderdetailFindUniqueArgs>(args: SelectSubset<T, orderdetailFindUniqueArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orderdetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderdetailFindUniqueOrThrowArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderdetailFindUniqueOrThrowArgs>(args: SelectSubset<T, orderdetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderdetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailFindFirstArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderdetailFindFirstArgs>(args?: SelectSubset<T, orderdetailFindFirstArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderdetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailFindFirstOrThrowArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderdetailFindFirstOrThrowArgs>(args?: SelectSubset<T, orderdetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orderdetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orderdetails
     * const orderdetails = await prisma.orderdetail.findMany()
     * 
     * // Get first 10 Orderdetails
     * const orderdetails = await prisma.orderdetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderdetailWithIdOnly = await prisma.orderdetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderdetailFindManyArgs>(args?: SelectSubset<T, orderdetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orderdetail.
     * @param {orderdetailCreateArgs} args - Arguments to create a Orderdetail.
     * @example
     * // Create one Orderdetail
     * const Orderdetail = await prisma.orderdetail.create({
     *   data: {
     *     // ... data to create a Orderdetail
     *   }
     * })
     * 
     */
    create<T extends orderdetailCreateArgs>(args: SelectSubset<T, orderdetailCreateArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orderdetails.
     * @param {orderdetailCreateManyArgs} args - Arguments to create many Orderdetails.
     * @example
     * // Create many Orderdetails
     * const orderdetail = await prisma.orderdetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderdetailCreateManyArgs>(args?: SelectSubset<T, orderdetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orderdetail.
     * @param {orderdetailDeleteArgs} args - Arguments to delete one Orderdetail.
     * @example
     * // Delete one Orderdetail
     * const Orderdetail = await prisma.orderdetail.delete({
     *   where: {
     *     // ... filter to delete one Orderdetail
     *   }
     * })
     * 
     */
    delete<T extends orderdetailDeleteArgs>(args: SelectSubset<T, orderdetailDeleteArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orderdetail.
     * @param {orderdetailUpdateArgs} args - Arguments to update one Orderdetail.
     * @example
     * // Update one Orderdetail
     * const orderdetail = await prisma.orderdetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderdetailUpdateArgs>(args: SelectSubset<T, orderdetailUpdateArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orderdetails.
     * @param {orderdetailDeleteManyArgs} args - Arguments to filter Orderdetails to delete.
     * @example
     * // Delete a few Orderdetails
     * const { count } = await prisma.orderdetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderdetailDeleteManyArgs>(args?: SelectSubset<T, orderdetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orderdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orderdetails
     * const orderdetail = await prisma.orderdetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderdetailUpdateManyArgs>(args: SelectSubset<T, orderdetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orderdetail.
     * @param {orderdetailUpsertArgs} args - Arguments to update or create a Orderdetail.
     * @example
     * // Update or create a Orderdetail
     * const orderdetail = await prisma.orderdetail.upsert({
     *   create: {
     *     // ... data to create a Orderdetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orderdetail we want to update
     *   }
     * })
     */
    upsert<T extends orderdetailUpsertArgs>(args: SelectSubset<T, orderdetailUpsertArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orderdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailCountArgs} args - Arguments to filter Orderdetails to count.
     * @example
     * // Count the number of Orderdetails
     * const count = await prisma.orderdetail.count({
     *   where: {
     *     // ... the filter for the Orderdetails we want to count
     *   }
     * })
    **/
    count<T extends orderdetailCountArgs>(
      args?: Subset<T, orderdetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderdetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orderdetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderdetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderdetailAggregateArgs>(args: Subset<T, OrderdetailAggregateArgs>): Prisma.PrismaPromise<GetOrderdetailAggregateType<T>>

    /**
     * Group by Orderdetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderdetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderdetailGroupByArgs['orderBy'] }
        : { orderBy?: orderdetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderdetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderdetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderdetail model
   */
  readonly fields: orderdetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderdetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderdetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orderdetail model
   */
  interface orderdetailFieldRefs {
    readonly id: FieldRef<"orderdetail", 'String'>
    readonly orderId: FieldRef<"orderdetail", 'String'>
    readonly productId: FieldRef<"orderdetail", 'String'>
    readonly quantity: FieldRef<"orderdetail", 'Int'>
    readonly price: FieldRef<"orderdetail", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * orderdetail findUnique
   */
  export type orderdetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter, which orderdetail to fetch.
     */
    where: orderdetailWhereUniqueInput
  }

  /**
   * orderdetail findUniqueOrThrow
   */
  export type orderdetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter, which orderdetail to fetch.
     */
    where: orderdetailWhereUniqueInput
  }

  /**
   * orderdetail findFirst
   */
  export type orderdetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter, which orderdetail to fetch.
     */
    where?: orderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderdetails.
     */
    cursor?: orderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderdetails.
     */
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * orderdetail findFirstOrThrow
   */
  export type orderdetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter, which orderdetail to fetch.
     */
    where?: orderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderdetails.
     */
    cursor?: orderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderdetails.
     */
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * orderdetail findMany
   */
  export type orderdetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter, which orderdetails to fetch.
     */
    where?: orderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderdetails.
     */
    cursor?: orderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * orderdetail create
   */
  export type orderdetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * The data needed to create a orderdetail.
     */
    data: XOR<orderdetailCreateInput, orderdetailUncheckedCreateInput>
  }

  /**
   * orderdetail createMany
   */
  export type orderdetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderdetails.
     */
    data: orderdetailCreateManyInput | orderdetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orderdetail update
   */
  export type orderdetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * The data needed to update a orderdetail.
     */
    data: XOR<orderdetailUpdateInput, orderdetailUncheckedUpdateInput>
    /**
     * Choose, which orderdetail to update.
     */
    where: orderdetailWhereUniqueInput
  }

  /**
   * orderdetail updateMany
   */
  export type orderdetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderdetails.
     */
    data: XOR<orderdetailUpdateManyMutationInput, orderdetailUncheckedUpdateManyInput>
    /**
     * Filter which orderdetails to update
     */
    where?: orderdetailWhereInput
    /**
     * Limit how many orderdetails to update.
     */
    limit?: number
  }

  /**
   * orderdetail upsert
   */
  export type orderdetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * The filter to search for the orderdetail to update in case it exists.
     */
    where: orderdetailWhereUniqueInput
    /**
     * In case the orderdetail found by the `where` argument doesn't exist, create a new orderdetail with this data.
     */
    create: XOR<orderdetailCreateInput, orderdetailUncheckedCreateInput>
    /**
     * In case the orderdetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderdetailUpdateInput, orderdetailUncheckedUpdateInput>
  }

  /**
   * orderdetail delete
   */
  export type orderdetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter which orderdetail to delete.
     */
    where: orderdetailWhereUniqueInput
  }

  /**
   * orderdetail deleteMany
   */
  export type orderdetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderdetails to delete
     */
    where?: orderdetailWhereInput
    /**
     * Limit how many orderdetails to delete.
     */
    limit?: number
  }

  /**
   * orderdetail without action
   */
  export type orderdetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    sku: string | null
    name: string | null
    description: string | null
    image: string | null
    price: number | null
    stock: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    sku: string | null
    name: string | null
    description: string | null
    image: string | null
    price: number | null
    stock: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    sku: number
    name: number
    description: number
    image: number
    price: number
    stock: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    description?: true
    image?: true
    price?: true
    stock?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    description?: true
    image?: true
    price?: true
    stock?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    description?: true
    image?: true
    price?: true
    stock?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    sku: string
    name: string
    description: string | null
    image: string | null
    price: number
    stock: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    stock?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderdetail?: boolean | Product$orderdetailArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    sku?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    stock?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "name" | "description" | "image" | "price" | "stock" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderdetail?: boolean | Product$orderdetailArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      orderdetail: Prisma.$orderdetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sku: string
      name: string
      description: string | null
      image: string | null
      price: number
      stock: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderdetail<T extends Product$orderdetailArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderdetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly image: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly active: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.orderdetail
   */
  export type Product$orderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    where?: orderdetailWhereInput
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    cursor?: orderdetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    emailVerified: Date | null
    role: $Enums.user_role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    emailVerified: Date | null
    role: $Enums.user_role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    emailVerified: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    emailVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    emailVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    emailVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    name: string | null
    emailVerified: Date | null
    role: $Enums.user_role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    emailVerified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | user$orderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    emailVerified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "emailVerified" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | user$orderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      name: string | null
      emailVerified: Date | null
      role: $Enums.user_role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends user$orderArgs<ExtArgs> = {}>(args?: Subset<T, user$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly emailVerified: FieldRef<"user", 'DateTime'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.order
   */
  export type user$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model verificationtoken
   */

  export type AggregateVerificationtoken = {
    _count: VerificationtokenCountAggregateOutputType | null
    _min: VerificationtokenMinAggregateOutputType | null
    _max: VerificationtokenMaxAggregateOutputType | null
  }

  export type VerificationtokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationtokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationtokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationtokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationtokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationtokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationtokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verificationtoken to aggregate.
     */
    where?: verificationtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationtokens to fetch.
     */
    orderBy?: verificationtokenOrderByWithRelationInput | verificationtokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verificationtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationtokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationtokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verificationtokens
    **/
    _count?: true | VerificationtokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationtokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationtokenMaxAggregateInputType
  }

  export type GetVerificationtokenAggregateType<T extends VerificationtokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationtoken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationtoken[P]>
      : GetScalarType<T[P], AggregateVerificationtoken[P]>
  }




  export type verificationtokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verificationtokenWhereInput
    orderBy?: verificationtokenOrderByWithAggregationInput | verificationtokenOrderByWithAggregationInput[]
    by: VerificationtokenScalarFieldEnum[] | VerificationtokenScalarFieldEnum
    having?: verificationtokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationtokenCountAggregateInputType | true
    _min?: VerificationtokenMinAggregateInputType
    _max?: VerificationtokenMaxAggregateInputType
  }

  export type VerificationtokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationtokenCountAggregateOutputType | null
    _min: VerificationtokenMinAggregateOutputType | null
    _max: VerificationtokenMaxAggregateOutputType | null
  }

  type GetVerificationtokenGroupByPayload<T extends verificationtokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationtokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationtokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationtokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationtokenGroupByOutputType[P]>
        }
      >
    >


  export type verificationtokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationtoken"]>



  export type verificationtokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type verificationtokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationtoken"]>

  export type $verificationtokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verificationtoken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationtoken"]>
    composites: {}
  }

  type verificationtokenGetPayload<S extends boolean | null | undefined | verificationtokenDefaultArgs> = $Result.GetResult<Prisma.$verificationtokenPayload, S>

  type verificationtokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verificationtokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationtokenCountAggregateInputType | true
    }

  export interface verificationtokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verificationtoken'], meta: { name: 'verificationtoken' } }
    /**
     * Find zero or one Verificationtoken that matches the filter.
     * @param {verificationtokenFindUniqueArgs} args - Arguments to find a Verificationtoken
     * @example
     * // Get one Verificationtoken
     * const verificationtoken = await prisma.verificationtoken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verificationtokenFindUniqueArgs>(args: SelectSubset<T, verificationtokenFindUniqueArgs<ExtArgs>>): Prisma__verificationtokenClient<$Result.GetResult<Prisma.$verificationtokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verificationtoken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verificationtokenFindUniqueOrThrowArgs} args - Arguments to find a Verificationtoken
     * @example
     * // Get one Verificationtoken
     * const verificationtoken = await prisma.verificationtoken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verificationtokenFindUniqueOrThrowArgs>(args: SelectSubset<T, verificationtokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verificationtokenClient<$Result.GetResult<Prisma.$verificationtokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verificationtoken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationtokenFindFirstArgs} args - Arguments to find a Verificationtoken
     * @example
     * // Get one Verificationtoken
     * const verificationtoken = await prisma.verificationtoken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verificationtokenFindFirstArgs>(args?: SelectSubset<T, verificationtokenFindFirstArgs<ExtArgs>>): Prisma__verificationtokenClient<$Result.GetResult<Prisma.$verificationtokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verificationtoken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationtokenFindFirstOrThrowArgs} args - Arguments to find a Verificationtoken
     * @example
     * // Get one Verificationtoken
     * const verificationtoken = await prisma.verificationtoken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verificationtokenFindFirstOrThrowArgs>(args?: SelectSubset<T, verificationtokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__verificationtokenClient<$Result.GetResult<Prisma.$verificationtokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verificationtokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationtokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verificationtokens
     * const verificationtokens = await prisma.verificationtoken.findMany()
     * 
     * // Get first 10 Verificationtokens
     * const verificationtokens = await prisma.verificationtoken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationtokenWithIdentifierOnly = await prisma.verificationtoken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends verificationtokenFindManyArgs>(args?: SelectSubset<T, verificationtokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificationtokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verificationtoken.
     * @param {verificationtokenCreateArgs} args - Arguments to create a Verificationtoken.
     * @example
     * // Create one Verificationtoken
     * const Verificationtoken = await prisma.verificationtoken.create({
     *   data: {
     *     // ... data to create a Verificationtoken
     *   }
     * })
     * 
     */
    create<T extends verificationtokenCreateArgs>(args: SelectSubset<T, verificationtokenCreateArgs<ExtArgs>>): Prisma__verificationtokenClient<$Result.GetResult<Prisma.$verificationtokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verificationtokens.
     * @param {verificationtokenCreateManyArgs} args - Arguments to create many Verificationtokens.
     * @example
     * // Create many Verificationtokens
     * const verificationtoken = await prisma.verificationtoken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verificationtokenCreateManyArgs>(args?: SelectSubset<T, verificationtokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verificationtoken.
     * @param {verificationtokenDeleteArgs} args - Arguments to delete one Verificationtoken.
     * @example
     * // Delete one Verificationtoken
     * const Verificationtoken = await prisma.verificationtoken.delete({
     *   where: {
     *     // ... filter to delete one Verificationtoken
     *   }
     * })
     * 
     */
    delete<T extends verificationtokenDeleteArgs>(args: SelectSubset<T, verificationtokenDeleteArgs<ExtArgs>>): Prisma__verificationtokenClient<$Result.GetResult<Prisma.$verificationtokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verificationtoken.
     * @param {verificationtokenUpdateArgs} args - Arguments to update one Verificationtoken.
     * @example
     * // Update one Verificationtoken
     * const verificationtoken = await prisma.verificationtoken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verificationtokenUpdateArgs>(args: SelectSubset<T, verificationtokenUpdateArgs<ExtArgs>>): Prisma__verificationtokenClient<$Result.GetResult<Prisma.$verificationtokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verificationtokens.
     * @param {verificationtokenDeleteManyArgs} args - Arguments to filter Verificationtokens to delete.
     * @example
     * // Delete a few Verificationtokens
     * const { count } = await prisma.verificationtoken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verificationtokenDeleteManyArgs>(args?: SelectSubset<T, verificationtokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verificationtokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationtokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verificationtokens
     * const verificationtoken = await prisma.verificationtoken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verificationtokenUpdateManyArgs>(args: SelectSubset<T, verificationtokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verificationtoken.
     * @param {verificationtokenUpsertArgs} args - Arguments to update or create a Verificationtoken.
     * @example
     * // Update or create a Verificationtoken
     * const verificationtoken = await prisma.verificationtoken.upsert({
     *   create: {
     *     // ... data to create a Verificationtoken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verificationtoken we want to update
     *   }
     * })
     */
    upsert<T extends verificationtokenUpsertArgs>(args: SelectSubset<T, verificationtokenUpsertArgs<ExtArgs>>): Prisma__verificationtokenClient<$Result.GetResult<Prisma.$verificationtokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verificationtokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationtokenCountArgs} args - Arguments to filter Verificationtokens to count.
     * @example
     * // Count the number of Verificationtokens
     * const count = await prisma.verificationtoken.count({
     *   where: {
     *     // ... the filter for the Verificationtokens we want to count
     *   }
     * })
    **/
    count<T extends verificationtokenCountArgs>(
      args?: Subset<T, verificationtokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationtokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verificationtoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationtokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationtokenAggregateArgs>(args: Subset<T, VerificationtokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationtokenAggregateType<T>>

    /**
     * Group by Verificationtoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationtokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends verificationtokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verificationtokenGroupByArgs['orderBy'] }
        : { orderBy?: verificationtokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, verificationtokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationtokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verificationtoken model
   */
  readonly fields: verificationtokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verificationtoken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verificationtokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the verificationtoken model
   */
  interface verificationtokenFieldRefs {
    readonly identifier: FieldRef<"verificationtoken", 'String'>
    readonly token: FieldRef<"verificationtoken", 'String'>
    readonly expires: FieldRef<"verificationtoken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * verificationtoken findUnique
   */
  export type verificationtokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationtoken
     */
    select?: verificationtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationtoken
     */
    omit?: verificationtokenOmit<ExtArgs> | null
    /**
     * Filter, which verificationtoken to fetch.
     */
    where: verificationtokenWhereUniqueInput
  }

  /**
   * verificationtoken findUniqueOrThrow
   */
  export type verificationtokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationtoken
     */
    select?: verificationtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationtoken
     */
    omit?: verificationtokenOmit<ExtArgs> | null
    /**
     * Filter, which verificationtoken to fetch.
     */
    where: verificationtokenWhereUniqueInput
  }

  /**
   * verificationtoken findFirst
   */
  export type verificationtokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationtoken
     */
    select?: verificationtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationtoken
     */
    omit?: verificationtokenOmit<ExtArgs> | null
    /**
     * Filter, which verificationtoken to fetch.
     */
    where?: verificationtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationtokens to fetch.
     */
    orderBy?: verificationtokenOrderByWithRelationInput | verificationtokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verificationtokens.
     */
    cursor?: verificationtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationtokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationtokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verificationtokens.
     */
    distinct?: VerificationtokenScalarFieldEnum | VerificationtokenScalarFieldEnum[]
  }

  /**
   * verificationtoken findFirstOrThrow
   */
  export type verificationtokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationtoken
     */
    select?: verificationtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationtoken
     */
    omit?: verificationtokenOmit<ExtArgs> | null
    /**
     * Filter, which verificationtoken to fetch.
     */
    where?: verificationtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationtokens to fetch.
     */
    orderBy?: verificationtokenOrderByWithRelationInput | verificationtokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verificationtokens.
     */
    cursor?: verificationtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationtokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationtokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verificationtokens.
     */
    distinct?: VerificationtokenScalarFieldEnum | VerificationtokenScalarFieldEnum[]
  }

  /**
   * verificationtoken findMany
   */
  export type verificationtokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationtoken
     */
    select?: verificationtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationtoken
     */
    omit?: verificationtokenOmit<ExtArgs> | null
    /**
     * Filter, which verificationtokens to fetch.
     */
    where?: verificationtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificationtokens to fetch.
     */
    orderBy?: verificationtokenOrderByWithRelationInput | verificationtokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verificationtokens.
     */
    cursor?: verificationtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificationtokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificationtokens.
     */
    skip?: number
    distinct?: VerificationtokenScalarFieldEnum | VerificationtokenScalarFieldEnum[]
  }

  /**
   * verificationtoken create
   */
  export type verificationtokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationtoken
     */
    select?: verificationtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationtoken
     */
    omit?: verificationtokenOmit<ExtArgs> | null
    /**
     * The data needed to create a verificationtoken.
     */
    data: XOR<verificationtokenCreateInput, verificationtokenUncheckedCreateInput>
  }

  /**
   * verificationtoken createMany
   */
  export type verificationtokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verificationtokens.
     */
    data: verificationtokenCreateManyInput | verificationtokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verificationtoken update
   */
  export type verificationtokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationtoken
     */
    select?: verificationtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationtoken
     */
    omit?: verificationtokenOmit<ExtArgs> | null
    /**
     * The data needed to update a verificationtoken.
     */
    data: XOR<verificationtokenUpdateInput, verificationtokenUncheckedUpdateInput>
    /**
     * Choose, which verificationtoken to update.
     */
    where: verificationtokenWhereUniqueInput
  }

  /**
   * verificationtoken updateMany
   */
  export type verificationtokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verificationtokens.
     */
    data: XOR<verificationtokenUpdateManyMutationInput, verificationtokenUncheckedUpdateManyInput>
    /**
     * Filter which verificationtokens to update
     */
    where?: verificationtokenWhereInput
    /**
     * Limit how many verificationtokens to update.
     */
    limit?: number
  }

  /**
   * verificationtoken upsert
   */
  export type verificationtokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationtoken
     */
    select?: verificationtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationtoken
     */
    omit?: verificationtokenOmit<ExtArgs> | null
    /**
     * The filter to search for the verificationtoken to update in case it exists.
     */
    where: verificationtokenWhereUniqueInput
    /**
     * In case the verificationtoken found by the `where` argument doesn't exist, create a new verificationtoken with this data.
     */
    create: XOR<verificationtokenCreateInput, verificationtokenUncheckedCreateInput>
    /**
     * In case the verificationtoken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verificationtokenUpdateInput, verificationtokenUncheckedUpdateInput>
  }

  /**
   * verificationtoken delete
   */
  export type verificationtokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationtoken
     */
    select?: verificationtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationtoken
     */
    omit?: verificationtokenOmit<ExtArgs> | null
    /**
     * Filter which verificationtoken to delete.
     */
    where: verificationtokenWhereUniqueInput
  }

  /**
   * verificationtoken deleteMany
   */
  export type verificationtokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verificationtokens to delete
     */
    where?: verificationtokenWhereInput
    /**
     * Limit how many verificationtokens to delete.
     */
    limit?: number
  }

  /**
   * verificationtoken without action
   */
  export type verificationtokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificationtoken
     */
    select?: verificationtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificationtoken
     */
    omit?: verificationtokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    total: 'total'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderdetailScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price'
  };

  export type OrderdetailScalarFieldEnum = (typeof OrderdetailScalarFieldEnum)[keyof typeof OrderdetailScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    name: 'name',
    description: 'description',
    image: 'image',
    price: 'price',
    stock: 'stock',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    emailVerified: 'emailVerified',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationtokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationtokenScalarFieldEnum = (typeof VerificationtokenScalarFieldEnum)[keyof typeof VerificationtokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const orderOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type orderOrderByRelevanceFieldEnum = (typeof orderOrderByRelevanceFieldEnum)[keyof typeof orderOrderByRelevanceFieldEnum]


  export const orderdetailOrderByRelevanceFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId'
  };

  export type orderdetailOrderByRelevanceFieldEnum = (typeof orderdetailOrderByRelevanceFieldEnum)[keyof typeof orderdetailOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProductOrderByRelevanceFieldEnum: {
    id: 'id',
    sku: 'sku',
    name: 'name',
    description: 'description',
    image: 'image'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const verificationtokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type verificationtokenOrderByRelevanceFieldEnum = (typeof verificationtokenOrderByRelevanceFieldEnum)[keyof typeof verificationtokenOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'order_status'
   */
  export type Enumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    
  /**
   * Deep Input Types
   */


  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: StringFilter<"order"> | string
    userId?: StringFilter<"order"> | string
    createdAt?: DateTimeFilter<"order"> | Date | string
    updatedAt?: DateTimeFilter<"order"> | Date | string
    status?: Enumorder_statusFilter<"order"> | $Enums.order_status
    total?: FloatFilter<"order"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    orderdetail?: OrderdetailListRelationFilter
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    total?: SortOrder
    user?: userOrderByWithRelationInput
    orderdetail?: orderdetailOrderByRelationAggregateInput
    _relevance?: orderOrderByRelevanceInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    userId?: StringFilter<"order"> | string
    createdAt?: DateTimeFilter<"order"> | Date | string
    updatedAt?: DateTimeFilter<"order"> | Date | string
    status?: Enumorder_statusFilter<"order"> | $Enums.order_status
    total?: FloatFilter<"order"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    orderdetail?: OrderdetailListRelationFilter
  }, "id">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    total?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order"> | string
    userId?: StringWithAggregatesFilter<"order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"order"> | Date | string
    status?: Enumorder_statusWithAggregatesFilter<"order"> | $Enums.order_status
    total?: FloatWithAggregatesFilter<"order"> | number
  }

  export type orderdetailWhereInput = {
    AND?: orderdetailWhereInput | orderdetailWhereInput[]
    OR?: orderdetailWhereInput[]
    NOT?: orderdetailWhereInput | orderdetailWhereInput[]
    id?: StringFilter<"orderdetail"> | string
    orderId?: StringFilter<"orderdetail"> | string
    productId?: StringFilter<"orderdetail"> | string
    quantity?: IntFilter<"orderdetail"> | number
    price?: FloatFilter<"orderdetail"> | number
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type orderdetailOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: orderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    _relevance?: orderdetailOrderByRelevanceInput
  }

  export type orderdetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: orderdetailWhereInput | orderdetailWhereInput[]
    OR?: orderdetailWhereInput[]
    NOT?: orderdetailWhereInput | orderdetailWhereInput[]
    orderId?: StringFilter<"orderdetail"> | string
    productId?: StringFilter<"orderdetail"> | string
    quantity?: IntFilter<"orderdetail"> | number
    price?: FloatFilter<"orderdetail"> | number
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type orderdetailOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: orderdetailCountOrderByAggregateInput
    _avg?: orderdetailAvgOrderByAggregateInput
    _max?: orderdetailMaxOrderByAggregateInput
    _min?: orderdetailMinOrderByAggregateInput
    _sum?: orderdetailSumOrderByAggregateInput
  }

  export type orderdetailScalarWhereWithAggregatesInput = {
    AND?: orderdetailScalarWhereWithAggregatesInput | orderdetailScalarWhereWithAggregatesInput[]
    OR?: orderdetailScalarWhereWithAggregatesInput[]
    NOT?: orderdetailScalarWhereWithAggregatesInput | orderdetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"orderdetail"> | string
    orderId?: StringWithAggregatesFilter<"orderdetail"> | string
    productId?: StringWithAggregatesFilter<"orderdetail"> | string
    quantity?: IntWithAggregatesFilter<"orderdetail"> | number
    price?: FloatWithAggregatesFilter<"orderdetail"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    image?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    active?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    orderdetail?: OrderdetailListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderdetail?: orderdetailOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    image?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    active?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    orderdetail?: OrderdetailListRelationFilter
  }, "id" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    image?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    stock?: IntWithAggregatesFilter<"Product"> | number
    active?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringNullableFilter<"user"> | string | null
    name?: StringNullableFilter<"user"> | string | null
    emailVerified?: DateTimeNullableFilter<"user"> | Date | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    order?: OrderListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: orderOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringNullableFilter<"user"> | string | null
    name?: StringNullableFilter<"user"> | string | null
    emailVerified?: DateTimeNullableFilter<"user"> | Date | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    order?: OrderListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringNullableWithAggregatesFilter<"user"> | string | null
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    role?: Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type verificationtokenWhereInput = {
    AND?: verificationtokenWhereInput | verificationtokenWhereInput[]
    OR?: verificationtokenWhereInput[]
    NOT?: verificationtokenWhereInput | verificationtokenWhereInput[]
    identifier?: StringFilter<"verificationtoken"> | string
    token?: StringFilter<"verificationtoken"> | string
    expires?: DateTimeFilter<"verificationtoken"> | Date | string
  }

  export type verificationtokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: verificationtokenOrderByRelevanceInput
  }

  export type verificationtokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: verificationtokenIdentifierTokenCompoundUniqueInput
    AND?: verificationtokenWhereInput | verificationtokenWhereInput[]
    OR?: verificationtokenWhereInput[]
    NOT?: verificationtokenWhereInput | verificationtokenWhereInput[]
    identifier?: StringFilter<"verificationtoken"> | string
    expires?: DateTimeFilter<"verificationtoken"> | Date | string
  }, "token" | "identifier_token">

  export type verificationtokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: verificationtokenCountOrderByAggregateInput
    _max?: verificationtokenMaxOrderByAggregateInput
    _min?: verificationtokenMinOrderByAggregateInput
  }

  export type verificationtokenScalarWhereWithAggregatesInput = {
    AND?: verificationtokenScalarWhereWithAggregatesInput | verificationtokenScalarWhereWithAggregatesInput[]
    OR?: verificationtokenScalarWhereWithAggregatesInput[]
    NOT?: verificationtokenScalarWhereWithAggregatesInput | verificationtokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"verificationtoken"> | string
    token?: StringWithAggregatesFilter<"verificationtoken"> | string
    expires?: DateTimeWithAggregatesFilter<"verificationtoken"> | Date | string
  }

  export type orderCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    status?: $Enums.order_status
    total: number
    user: userCreateNestedOneWithoutOrderInput
    orderdetail?: orderdetailCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    id: string
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
    status?: $Enums.order_status
    total: number
    orderdetail?: orderdetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    total?: FloatFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutOrderNestedInput
    orderdetail?: orderdetailUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    total?: FloatFieldUpdateOperationsInput | number
    orderdetail?: orderdetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    id: string
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
    status?: $Enums.order_status
    total: number
  }

  export type orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailCreateInput = {
    id: string
    quantity: number
    price: number
    order: orderCreateNestedOneWithoutOrderdetailInput
    product: ProductCreateNestedOneWithoutOrderdetailInput
  }

  export type orderdetailUncheckedCreateInput = {
    id: string
    orderId: string
    productId: string
    quantity: number
    price: number
  }

  export type orderdetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutOrderdetailNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderdetailNestedInput
  }

  export type orderdetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailCreateManyInput = {
    id: string
    orderId: string
    productId: string
    quantity: number
    price: number
  }

  export type orderdetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    id: string
    sku: string
    name: string
    description?: string | null
    image?: string | null
    price: number
    stock: number
    active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    orderdetail?: orderdetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id: string
    sku: string
    name: string
    description?: string | null
    image?: string | null
    price: number
    stock: number
    active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    orderdetail?: orderdetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderdetail?: orderdetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderdetail?: orderdetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id: string
    sku: string
    name: string
    description?: string | null
    image?: string | null
    price: number
    stock: number
    active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    id: string
    email: string
    password?: string | null
    name?: string | null
    emailVerified?: Date | string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt: Date | string
    order?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: string
    email: string
    password?: string | null
    name?: string | null
    emailVerified?: Date | string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt: Date | string
    order?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: string
    email: string
    password?: string | null
    name?: string | null
    emailVerified?: Date | string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationtokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type verificationtokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type verificationtokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationtokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationtokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type verificationtokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificationtokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type OrderdetailListRelationFilter = {
    every?: orderdetailWhereInput
    some?: orderdetailWhereInput
    none?: orderdetailWhereInput
  }

  export type orderdetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderOrderByRelevanceInput = {
    fields: orderOrderByRelevanceFieldEnum | orderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    total?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    total?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    total?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OrderScalarRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type orderdetailOrderByRelevanceInput = {
    fields: orderdetailOrderByRelevanceFieldEnum | orderdetailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type orderdetailCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderdetailAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderdetailMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderdetailMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type orderdetailSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type verificationtokenOrderByRelevanceInput = {
    fields: verificationtokenOrderByRelevanceFieldEnum | verificationtokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type verificationtokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type verificationtokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type verificationtokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type verificationtokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type userCreateNestedOneWithoutOrderInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    connectOrCreate?: userCreateOrConnectWithoutOrderInput
    connect?: userWhereUniqueInput
  }

  export type orderdetailCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput> | orderdetailCreateWithoutOrderInput[] | orderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutOrderInput | orderdetailCreateOrConnectWithoutOrderInput[]
    createMany?: orderdetailCreateManyOrderInputEnvelope
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
  }

  export type orderdetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput> | orderdetailCreateWithoutOrderInput[] | orderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutOrderInput | orderdetailCreateOrConnectWithoutOrderInput[]
    createMany?: orderdetailCreateManyOrderInputEnvelope
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumorder_statusFieldUpdateOperationsInput = {
    set?: $Enums.order_status
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    connectOrCreate?: userCreateOrConnectWithoutOrderInput
    upsert?: userUpsertWithoutOrderInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOrderInput, userUpdateWithoutOrderInput>, userUncheckedUpdateWithoutOrderInput>
  }

  export type orderdetailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput> | orderdetailCreateWithoutOrderInput[] | orderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutOrderInput | orderdetailCreateOrConnectWithoutOrderInput[]
    upsert?: orderdetailUpsertWithWhereUniqueWithoutOrderInput | orderdetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderdetailCreateManyOrderInputEnvelope
    set?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    disconnect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    delete?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    update?: orderdetailUpdateWithWhereUniqueWithoutOrderInput | orderdetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderdetailUpdateManyWithWhereWithoutOrderInput | orderdetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
  }

  export type orderdetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput> | orderdetailCreateWithoutOrderInput[] | orderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutOrderInput | orderdetailCreateOrConnectWithoutOrderInput[]
    upsert?: orderdetailUpsertWithWhereUniqueWithoutOrderInput | orderdetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderdetailCreateManyOrderInputEnvelope
    set?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    disconnect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    delete?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    update?: orderdetailUpdateWithWhereUniqueWithoutOrderInput | orderdetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderdetailUpdateManyWithWhereWithoutOrderInput | orderdetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
  }

  export type orderCreateNestedOneWithoutOrderdetailInput = {
    create?: XOR<orderCreateWithoutOrderdetailInput, orderUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrderdetailInput
    connect?: orderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderdetailInput = {
    create?: XOR<ProductCreateWithoutOrderdetailInput, ProductUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderdetailInput
    connect?: ProductWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type orderUpdateOneRequiredWithoutOrderdetailNestedInput = {
    create?: XOR<orderCreateWithoutOrderdetailInput, orderUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrderdetailInput
    upsert?: orderUpsertWithoutOrderdetailInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutOrderdetailInput, orderUpdateWithoutOrderdetailInput>, orderUncheckedUpdateWithoutOrderdetailInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderdetailNestedInput = {
    create?: XOR<ProductCreateWithoutOrderdetailInput, ProductUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderdetailInput
    upsert?: ProductUpsertWithoutOrderdetailInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderdetailInput, ProductUpdateWithoutOrderdetailInput>, ProductUncheckedUpdateWithoutOrderdetailInput>
  }

  export type orderdetailCreateNestedManyWithoutProductInput = {
    create?: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput> | orderdetailCreateWithoutProductInput[] | orderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutProductInput | orderdetailCreateOrConnectWithoutProductInput[]
    createMany?: orderdetailCreateManyProductInputEnvelope
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
  }

  export type orderdetailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput> | orderdetailCreateWithoutProductInput[] | orderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutProductInput | orderdetailCreateOrConnectWithoutProductInput[]
    createMany?: orderdetailCreateManyProductInputEnvelope
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type orderdetailUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput> | orderdetailCreateWithoutProductInput[] | orderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutProductInput | orderdetailCreateOrConnectWithoutProductInput[]
    upsert?: orderdetailUpsertWithWhereUniqueWithoutProductInput | orderdetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderdetailCreateManyProductInputEnvelope
    set?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    disconnect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    delete?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    update?: orderdetailUpdateWithWhereUniqueWithoutProductInput | orderdetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderdetailUpdateManyWithWhereWithoutProductInput | orderdetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
  }

  export type orderdetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput> | orderdetailCreateWithoutProductInput[] | orderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutProductInput | orderdetailCreateOrConnectWithoutProductInput[]
    upsert?: orderdetailUpsertWithWhereUniqueWithoutProductInput | orderdetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderdetailCreateManyProductInputEnvelope
    set?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    disconnect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    delete?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    update?: orderdetailUpdateWithWhereUniqueWithoutProductInput | orderdetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderdetailUpdateManyWithWhereWithoutProductInput | orderdetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
  }

  export type orderCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type userCreateWithoutOrderInput = {
    id: string
    email: string
    password?: string | null
    name?: string | null
    emailVerified?: Date | string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type userUncheckedCreateWithoutOrderInput = {
    id: string
    email: string
    password?: string | null
    name?: string | null
    emailVerified?: Date | string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type userCreateOrConnectWithoutOrderInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
  }

  export type orderdetailCreateWithoutOrderInput = {
    id: string
    quantity: number
    price: number
    product: ProductCreateNestedOneWithoutOrderdetailInput
  }

  export type orderdetailUncheckedCreateWithoutOrderInput = {
    id: string
    productId: string
    quantity: number
    price: number
  }

  export type orderdetailCreateOrConnectWithoutOrderInput = {
    where: orderdetailWhereUniqueInput
    create: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput>
  }

  export type orderdetailCreateManyOrderInputEnvelope = {
    data: orderdetailCreateManyOrderInput | orderdetailCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutOrderInput = {
    update: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOrderInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>
  }

  export type userUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderdetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: orderdetailWhereUniqueInput
    update: XOR<orderdetailUpdateWithoutOrderInput, orderdetailUncheckedUpdateWithoutOrderInput>
    create: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput>
  }

  export type orderdetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: orderdetailWhereUniqueInput
    data: XOR<orderdetailUpdateWithoutOrderInput, orderdetailUncheckedUpdateWithoutOrderInput>
  }

  export type orderdetailUpdateManyWithWhereWithoutOrderInput = {
    where: orderdetailScalarWhereInput
    data: XOR<orderdetailUpdateManyMutationInput, orderdetailUncheckedUpdateManyWithoutOrderInput>
  }

  export type orderdetailScalarWhereInput = {
    AND?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
    OR?: orderdetailScalarWhereInput[]
    NOT?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
    id?: StringFilter<"orderdetail"> | string
    orderId?: StringFilter<"orderdetail"> | string
    productId?: StringFilter<"orderdetail"> | string
    quantity?: IntFilter<"orderdetail"> | number
    price?: FloatFilter<"orderdetail"> | number
  }

  export type orderCreateWithoutOrderdetailInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    status?: $Enums.order_status
    total: number
    user: userCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutOrderdetailInput = {
    id: string
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
    status?: $Enums.order_status
    total: number
  }

  export type orderCreateOrConnectWithoutOrderdetailInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutOrderdetailInput, orderUncheckedCreateWithoutOrderdetailInput>
  }

  export type ProductCreateWithoutOrderdetailInput = {
    id: string
    sku: string
    name: string
    description?: string | null
    image?: string | null
    price: number
    stock: number
    active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ProductUncheckedCreateWithoutOrderdetailInput = {
    id: string
    sku: string
    name: string
    description?: string | null
    image?: string | null
    price: number
    stock: number
    active?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ProductCreateOrConnectWithoutOrderdetailInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderdetailInput, ProductUncheckedCreateWithoutOrderdetailInput>
  }

  export type orderUpsertWithoutOrderdetailInput = {
    update: XOR<orderUpdateWithoutOrderdetailInput, orderUncheckedUpdateWithoutOrderdetailInput>
    create: XOR<orderCreateWithoutOrderdetailInput, orderUncheckedCreateWithoutOrderdetailInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutOrderdetailInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutOrderdetailInput, orderUncheckedUpdateWithoutOrderdetailInput>
  }

  export type orderUpdateWithoutOrderdetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    total?: FloatFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutOrderdetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductUpsertWithoutOrderdetailInput = {
    update: XOR<ProductUpdateWithoutOrderdetailInput, ProductUncheckedUpdateWithoutOrderdetailInput>
    create: XOR<ProductCreateWithoutOrderdetailInput, ProductUncheckedCreateWithoutOrderdetailInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderdetailInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderdetailInput, ProductUncheckedUpdateWithoutOrderdetailInput>
  }

  export type ProductUpdateWithoutOrderdetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutOrderdetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderdetailCreateWithoutProductInput = {
    id: string
    quantity: number
    price: number
    order: orderCreateNestedOneWithoutOrderdetailInput
  }

  export type orderdetailUncheckedCreateWithoutProductInput = {
    id: string
    orderId: string
    quantity: number
    price: number
  }

  export type orderdetailCreateOrConnectWithoutProductInput = {
    where: orderdetailWhereUniqueInput
    create: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput>
  }

  export type orderdetailCreateManyProductInputEnvelope = {
    data: orderdetailCreateManyProductInput | orderdetailCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type orderdetailUpsertWithWhereUniqueWithoutProductInput = {
    where: orderdetailWhereUniqueInput
    update: XOR<orderdetailUpdateWithoutProductInput, orderdetailUncheckedUpdateWithoutProductInput>
    create: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput>
  }

  export type orderdetailUpdateWithWhereUniqueWithoutProductInput = {
    where: orderdetailWhereUniqueInput
    data: XOR<orderdetailUpdateWithoutProductInput, orderdetailUncheckedUpdateWithoutProductInput>
  }

  export type orderdetailUpdateManyWithWhereWithoutProductInput = {
    where: orderdetailScalarWhereInput
    data: XOR<orderdetailUpdateManyMutationInput, orderdetailUncheckedUpdateManyWithoutProductInput>
  }

  export type orderCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    status?: $Enums.order_status
    total: number
    orderdetail?: orderdetailCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    status?: $Enums.order_status
    total: number
    orderdetail?: orderdetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderCreateManyUserInputEnvelope = {
    data: orderCreateManyUserInput | orderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
  }

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUserInput>
  }

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[]
    OR?: orderScalarWhereInput[]
    NOT?: orderScalarWhereInput | orderScalarWhereInput[]
    id?: StringFilter<"order"> | string
    userId?: StringFilter<"order"> | string
    createdAt?: DateTimeFilter<"order"> | Date | string
    updatedAt?: DateTimeFilter<"order"> | Date | string
    status?: Enumorder_statusFilter<"order"> | $Enums.order_status
    total?: FloatFilter<"order"> | number
  }

  export type orderdetailCreateManyOrderInput = {
    id: string
    productId: string
    quantity: number
    price: number
  }

  export type orderdetailUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderdetailNestedInput
  }

  export type orderdetailUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailCreateManyProductInput = {
    id: string
    orderId: string
    quantity: number
    price: number
  }

  export type orderdetailUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutOrderdetailNestedInput
  }

  export type orderdetailUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderCreateManyUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    status?: $Enums.order_status
    total: number
  }

  export type orderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    total?: FloatFieldUpdateOperationsInput | number
    orderdetail?: orderdetailUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    total?: FloatFieldUpdateOperationsInput | number
    orderdetail?: orderdetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    total?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}