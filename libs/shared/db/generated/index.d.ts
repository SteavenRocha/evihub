
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model UserClient
 * 
 */
export type UserClient = $Result.DefaultSelection<Prisma.$UserClientPayload>
/**
 * Model PaymentEvidence
 * 
 */
export type PaymentEvidence = $Result.DefaultSelection<Prisma.$PaymentEvidencePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const EvidenceStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type EvidenceStatus = (typeof EvidenceStatus)[keyof typeof EvidenceStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type EvidenceStatus = $Enums.EvidenceStatus

export const EvidenceStatus: typeof $Enums.EvidenceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userClient`: Exposes CRUD operations for the **UserClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserClients
    * const userClients = await prisma.userClient.findMany()
    * ```
    */
  get userClient(): Prisma.UserClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentEvidence`: Exposes CRUD operations for the **PaymentEvidence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentEvidences
    * const paymentEvidences = await prisma.paymentEvidence.findMany()
    * ```
    */
  get paymentEvidence(): Prisma.PaymentEvidenceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
    User: 'User',
    Client: 'Client',
    UserClient: 'UserClient',
    PaymentEvidence: 'PaymentEvidence'
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
      modelProps: "user" | "client" | "userClient" | "paymentEvidence"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      UserClient: {
        payload: Prisma.$UserClientPayload<ExtArgs>
        fields: Prisma.UserClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          findFirst: {
            args: Prisma.UserClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          findMany: {
            args: Prisma.UserClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>[]
          }
          create: {
            args: Prisma.UserClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          createMany: {
            args: Prisma.UserClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>[]
          }
          delete: {
            args: Prisma.UserClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          update: {
            args: Prisma.UserClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          deleteMany: {
            args: Prisma.UserClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>[]
          }
          upsert: {
            args: Prisma.UserClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          aggregate: {
            args: Prisma.UserClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserClient>
          }
          groupBy: {
            args: Prisma.UserClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserClientCountArgs<ExtArgs>
            result: $Utils.Optional<UserClientCountAggregateOutputType> | number
          }
        }
      }
      PaymentEvidence: {
        payload: Prisma.$PaymentEvidencePayload<ExtArgs>
        fields: Prisma.PaymentEvidenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentEvidenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentEvidenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload>
          }
          findFirst: {
            args: Prisma.PaymentEvidenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentEvidenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload>
          }
          findMany: {
            args: Prisma.PaymentEvidenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload>[]
          }
          create: {
            args: Prisma.PaymentEvidenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload>
          }
          createMany: {
            args: Prisma.PaymentEvidenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentEvidenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload>[]
          }
          delete: {
            args: Prisma.PaymentEvidenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload>
          }
          update: {
            args: Prisma.PaymentEvidenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload>
          }
          deleteMany: {
            args: Prisma.PaymentEvidenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentEvidenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentEvidenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload>[]
          }
          upsert: {
            args: Prisma.PaymentEvidenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEvidencePayload>
          }
          aggregate: {
            args: Prisma.PaymentEvidenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentEvidence>
          }
          groupBy: {
            args: Prisma.PaymentEvidenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentEvidenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentEvidenceCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentEvidenceCountAggregateOutputType> | number
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
    user?: UserOmit
    client?: ClientOmit
    userClient?: UserClientOmit
    paymentEvidence?: PaymentEvidenceOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userClients: number
    evidences: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userClients?: boolean | UserCountOutputTypeCountUserClientsArgs
    evidences?: boolean | UserCountOutputTypeCountEvidencesArgs
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
  export type UserCountOutputTypeCountUserClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentEvidenceWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    userClients: number
    evidences: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userClients?: boolean | ClientCountOutputTypeCountUserClientsArgs
    evidences?: boolean | ClientCountOutputTypeCountEvidencesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountUserClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserClientWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountEvidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentEvidenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userClients?: boolean | User$userClientsArgs<ExtArgs>
    evidences?: boolean | User$evidencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userClients?: boolean | User$userClientsArgs<ExtArgs>
    evidences?: boolean | User$evidencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userClients: Prisma.$UserClientPayload<ExtArgs>[]
      evidences: Prisma.$PaymentEvidencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userClients<T extends User$userClientsArgs<ExtArgs> = {}>(args?: Subset<T, User$userClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evidences<T extends User$evidencesArgs<ExtArgs> = {}>(args?: Subset<T, User$evidencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userClients
   */
  export type User$userClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    where?: UserClientWhereInput
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    cursor?: UserClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserClientScalarFieldEnum | UserClientScalarFieldEnum[]
  }

  /**
   * User.evidences
   */
  export type User$evidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    where?: PaymentEvidenceWhereInput
    orderBy?: PaymentEvidenceOrderByWithRelationInput | PaymentEvidenceOrderByWithRelationInput[]
    cursor?: PaymentEvidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentEvidenceScalarFieldEnum | PaymentEvidenceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    erpClientId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    erpClientId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    erpClientId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    erpClientId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    erpClientId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    erpClientId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    erpClientId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    erpClientId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userClients?: boolean | Client$userClientsArgs<ExtArgs>
    evidences?: boolean | Client$evidencesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    erpClientId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    erpClientId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    erpClientId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "erpClientId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userClients?: boolean | Client$userClientsArgs<ExtArgs>
    evidences?: boolean | Client$evidencesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      userClients: Prisma.$UserClientPayload<ExtArgs>[]
      evidences: Prisma.$PaymentEvidencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      erpClientId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userClients<T extends Client$userClientsArgs<ExtArgs> = {}>(args?: Subset<T, Client$userClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evidences<T extends Client$evidencesArgs<ExtArgs> = {}>(args?: Subset<T, Client$evidencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly erpClientId: FieldRef<"Client", 'String'>
    readonly isActive: FieldRef<"Client", 'Boolean'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.userClients
   */
  export type Client$userClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    where?: UserClientWhereInput
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    cursor?: UserClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserClientScalarFieldEnum | UserClientScalarFieldEnum[]
  }

  /**
   * Client.evidences
   */
  export type Client$evidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    where?: PaymentEvidenceWhereInput
    orderBy?: PaymentEvidenceOrderByWithRelationInput | PaymentEvidenceOrderByWithRelationInput[]
    cursor?: PaymentEvidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentEvidenceScalarFieldEnum | PaymentEvidenceScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model UserClient
   */

  export type AggregateUserClient = {
    _count: UserClientCountAggregateOutputType | null
    _min: UserClientMinAggregateOutputType | null
    _max: UserClientMaxAggregateOutputType | null
  }

  export type UserClientMinAggregateOutputType = {
    userId: string | null
    clientId: string | null
    role: $Enums.Role | null
  }

  export type UserClientMaxAggregateOutputType = {
    userId: string | null
    clientId: string | null
    role: $Enums.Role | null
  }

  export type UserClientCountAggregateOutputType = {
    userId: number
    clientId: number
    role: number
    _all: number
  }


  export type UserClientMinAggregateInputType = {
    userId?: true
    clientId?: true
    role?: true
  }

  export type UserClientMaxAggregateInputType = {
    userId?: true
    clientId?: true
    role?: true
  }

  export type UserClientCountAggregateInputType = {
    userId?: true
    clientId?: true
    role?: true
    _all?: true
  }

  export type UserClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserClient to aggregate.
     */
    where?: UserClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClients to fetch.
     */
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserClients
    **/
    _count?: true | UserClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserClientMaxAggregateInputType
  }

  export type GetUserClientAggregateType<T extends UserClientAggregateArgs> = {
        [P in keyof T & keyof AggregateUserClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserClient[P]>
      : GetScalarType<T[P], AggregateUserClient[P]>
  }




  export type UserClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserClientWhereInput
    orderBy?: UserClientOrderByWithAggregationInput | UserClientOrderByWithAggregationInput[]
    by: UserClientScalarFieldEnum[] | UserClientScalarFieldEnum
    having?: UserClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserClientCountAggregateInputType | true
    _min?: UserClientMinAggregateInputType
    _max?: UserClientMaxAggregateInputType
  }

  export type UserClientGroupByOutputType = {
    userId: string
    clientId: string
    role: $Enums.Role
    _count: UserClientCountAggregateOutputType | null
    _min: UserClientMinAggregateOutputType | null
    _max: UserClientMaxAggregateOutputType | null
  }

  type GetUserClientGroupByPayload<T extends UserClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserClientGroupByOutputType[P]>
            : GetScalarType<T[P], UserClientGroupByOutputType[P]>
        }
      >
    >


  export type UserClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    clientId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userClient"]>

  export type UserClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    clientId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userClient"]>

  export type UserClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    clientId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userClient"]>

  export type UserClientSelectScalar = {
    userId?: boolean
    clientId?: boolean
    role?: boolean
  }

  export type UserClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "clientId" | "role", ExtArgs["result"]["userClient"]>
  export type UserClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type UserClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type UserClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $UserClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserClient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      clientId: string
      role: $Enums.Role
    }, ExtArgs["result"]["userClient"]>
    composites: {}
  }

  type UserClientGetPayload<S extends boolean | null | undefined | UserClientDefaultArgs> = $Result.GetResult<Prisma.$UserClientPayload, S>

  type UserClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserClientCountAggregateInputType | true
    }

  export interface UserClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserClient'], meta: { name: 'UserClient' } }
    /**
     * Find zero or one UserClient that matches the filter.
     * @param {UserClientFindUniqueArgs} args - Arguments to find a UserClient
     * @example
     * // Get one UserClient
     * const userClient = await prisma.userClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserClientFindUniqueArgs>(args: SelectSubset<T, UserClientFindUniqueArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserClientFindUniqueOrThrowArgs} args - Arguments to find a UserClient
     * @example
     * // Get one UserClient
     * const userClient = await prisma.userClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserClientFindUniqueOrThrowArgs>(args: SelectSubset<T, UserClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientFindFirstArgs} args - Arguments to find a UserClient
     * @example
     * // Get one UserClient
     * const userClient = await prisma.userClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserClientFindFirstArgs>(args?: SelectSubset<T, UserClientFindFirstArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientFindFirstOrThrowArgs} args - Arguments to find a UserClient
     * @example
     * // Get one UserClient
     * const userClient = await prisma.userClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserClientFindFirstOrThrowArgs>(args?: SelectSubset<T, UserClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserClients
     * const userClients = await prisma.userClient.findMany()
     * 
     * // Get first 10 UserClients
     * const userClients = await prisma.userClient.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userClientWithUserIdOnly = await prisma.userClient.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserClientFindManyArgs>(args?: SelectSubset<T, UserClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserClient.
     * @param {UserClientCreateArgs} args - Arguments to create a UserClient.
     * @example
     * // Create one UserClient
     * const UserClient = await prisma.userClient.create({
     *   data: {
     *     // ... data to create a UserClient
     *   }
     * })
     * 
     */
    create<T extends UserClientCreateArgs>(args: SelectSubset<T, UserClientCreateArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserClients.
     * @param {UserClientCreateManyArgs} args - Arguments to create many UserClients.
     * @example
     * // Create many UserClients
     * const userClient = await prisma.userClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserClientCreateManyArgs>(args?: SelectSubset<T, UserClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserClients and returns the data saved in the database.
     * @param {UserClientCreateManyAndReturnArgs} args - Arguments to create many UserClients.
     * @example
     * // Create many UserClients
     * const userClient = await prisma.userClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserClients and only return the `userId`
     * const userClientWithUserIdOnly = await prisma.userClient.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserClientCreateManyAndReturnArgs>(args?: SelectSubset<T, UserClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserClient.
     * @param {UserClientDeleteArgs} args - Arguments to delete one UserClient.
     * @example
     * // Delete one UserClient
     * const UserClient = await prisma.userClient.delete({
     *   where: {
     *     // ... filter to delete one UserClient
     *   }
     * })
     * 
     */
    delete<T extends UserClientDeleteArgs>(args: SelectSubset<T, UserClientDeleteArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserClient.
     * @param {UserClientUpdateArgs} args - Arguments to update one UserClient.
     * @example
     * // Update one UserClient
     * const userClient = await prisma.userClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserClientUpdateArgs>(args: SelectSubset<T, UserClientUpdateArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserClients.
     * @param {UserClientDeleteManyArgs} args - Arguments to filter UserClients to delete.
     * @example
     * // Delete a few UserClients
     * const { count } = await prisma.userClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserClientDeleteManyArgs>(args?: SelectSubset<T, UserClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserClients
     * const userClient = await prisma.userClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserClientUpdateManyArgs>(args: SelectSubset<T, UserClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserClients and returns the data updated in the database.
     * @param {UserClientUpdateManyAndReturnArgs} args - Arguments to update many UserClients.
     * @example
     * // Update many UserClients
     * const userClient = await prisma.userClient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserClients and only return the `userId`
     * const userClientWithUserIdOnly = await prisma.userClient.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserClientUpdateManyAndReturnArgs>(args: SelectSubset<T, UserClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserClient.
     * @param {UserClientUpsertArgs} args - Arguments to update or create a UserClient.
     * @example
     * // Update or create a UserClient
     * const userClient = await prisma.userClient.upsert({
     *   create: {
     *     // ... data to create a UserClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserClient we want to update
     *   }
     * })
     */
    upsert<T extends UserClientUpsertArgs>(args: SelectSubset<T, UserClientUpsertArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientCountArgs} args - Arguments to filter UserClients to count.
     * @example
     * // Count the number of UserClients
     * const count = await prisma.userClient.count({
     *   where: {
     *     // ... the filter for the UserClients we want to count
     *   }
     * })
    **/
    count<T extends UserClientCountArgs>(
      args?: Subset<T, UserClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserClientAggregateArgs>(args: Subset<T, UserClientAggregateArgs>): Prisma.PrismaPromise<GetUserClientAggregateType<T>>

    /**
     * Group by UserClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientGroupByArgs} args - Group by arguments.
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
      T extends UserClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserClientGroupByArgs['orderBy'] }
        : { orderBy?: UserClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserClient model
   */
  readonly fields: UserClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserClient model
   */
  interface UserClientFieldRefs {
    readonly userId: FieldRef<"UserClient", 'String'>
    readonly clientId: FieldRef<"UserClient", 'String'>
    readonly role: FieldRef<"UserClient", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * UserClient findUnique
   */
  export type UserClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter, which UserClient to fetch.
     */
    where: UserClientWhereUniqueInput
  }

  /**
   * UserClient findUniqueOrThrow
   */
  export type UserClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter, which UserClient to fetch.
     */
    where: UserClientWhereUniqueInput
  }

  /**
   * UserClient findFirst
   */
  export type UserClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter, which UserClient to fetch.
     */
    where?: UserClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClients to fetch.
     */
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserClients.
     */
    cursor?: UserClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserClients.
     */
    distinct?: UserClientScalarFieldEnum | UserClientScalarFieldEnum[]
  }

  /**
   * UserClient findFirstOrThrow
   */
  export type UserClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter, which UserClient to fetch.
     */
    where?: UserClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClients to fetch.
     */
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserClients.
     */
    cursor?: UserClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserClients.
     */
    distinct?: UserClientScalarFieldEnum | UserClientScalarFieldEnum[]
  }

  /**
   * UserClient findMany
   */
  export type UserClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter, which UserClients to fetch.
     */
    where?: UserClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClients to fetch.
     */
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserClients.
     */
    cursor?: UserClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserClients.
     */
    distinct?: UserClientScalarFieldEnum | UserClientScalarFieldEnum[]
  }

  /**
   * UserClient create
   */
  export type UserClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * The data needed to create a UserClient.
     */
    data: XOR<UserClientCreateInput, UserClientUncheckedCreateInput>
  }

  /**
   * UserClient createMany
   */
  export type UserClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserClients.
     */
    data: UserClientCreateManyInput | UserClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserClient createManyAndReturn
   */
  export type UserClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * The data used to create many UserClients.
     */
    data: UserClientCreateManyInput | UserClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserClient update
   */
  export type UserClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * The data needed to update a UserClient.
     */
    data: XOR<UserClientUpdateInput, UserClientUncheckedUpdateInput>
    /**
     * Choose, which UserClient to update.
     */
    where: UserClientWhereUniqueInput
  }

  /**
   * UserClient updateMany
   */
  export type UserClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserClients.
     */
    data: XOR<UserClientUpdateManyMutationInput, UserClientUncheckedUpdateManyInput>
    /**
     * Filter which UserClients to update
     */
    where?: UserClientWhereInput
    /**
     * Limit how many UserClients to update.
     */
    limit?: number
  }

  /**
   * UserClient updateManyAndReturn
   */
  export type UserClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * The data used to update UserClients.
     */
    data: XOR<UserClientUpdateManyMutationInput, UserClientUncheckedUpdateManyInput>
    /**
     * Filter which UserClients to update
     */
    where?: UserClientWhereInput
    /**
     * Limit how many UserClients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserClient upsert
   */
  export type UserClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * The filter to search for the UserClient to update in case it exists.
     */
    where: UserClientWhereUniqueInput
    /**
     * In case the UserClient found by the `where` argument doesn't exist, create a new UserClient with this data.
     */
    create: XOR<UserClientCreateInput, UserClientUncheckedCreateInput>
    /**
     * In case the UserClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserClientUpdateInput, UserClientUncheckedUpdateInput>
  }

  /**
   * UserClient delete
   */
  export type UserClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter which UserClient to delete.
     */
    where: UserClientWhereUniqueInput
  }

  /**
   * UserClient deleteMany
   */
  export type UserClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserClients to delete
     */
    where?: UserClientWhereInput
    /**
     * Limit how many UserClients to delete.
     */
    limit?: number
  }

  /**
   * UserClient without action
   */
  export type UserClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
  }


  /**
   * Model PaymentEvidence
   */

  export type AggregatePaymentEvidence = {
    _count: PaymentEvidenceCountAggregateOutputType | null
    _avg: PaymentEvidenceAvgAggregateOutputType | null
    _sum: PaymentEvidenceSumAggregateOutputType | null
    _min: PaymentEvidenceMinAggregateOutputType | null
    _max: PaymentEvidenceMaxAggregateOutputType | null
  }

  export type PaymentEvidenceAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentEvidenceSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentEvidenceMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    uploadedBy: string | null
    amount: Decimal | null
    currency: string | null
    paymentDate: Date | null
    bank: string | null
    reference: string | null
    imageUrl: string | null
    status: $Enums.EvidenceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentEvidenceMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    uploadedBy: string | null
    amount: Decimal | null
    currency: string | null
    paymentDate: Date | null
    bank: string | null
    reference: string | null
    imageUrl: string | null
    status: $Enums.EvidenceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentEvidenceCountAggregateOutputType = {
    id: number
    clientId: number
    uploadedBy: number
    amount: number
    currency: number
    paymentDate: number
    bank: number
    reference: number
    imageUrl: number
    ocrRaw: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentEvidenceAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentEvidenceSumAggregateInputType = {
    amount?: true
  }

  export type PaymentEvidenceMinAggregateInputType = {
    id?: true
    clientId?: true
    uploadedBy?: true
    amount?: true
    currency?: true
    paymentDate?: true
    bank?: true
    reference?: true
    imageUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentEvidenceMaxAggregateInputType = {
    id?: true
    clientId?: true
    uploadedBy?: true
    amount?: true
    currency?: true
    paymentDate?: true
    bank?: true
    reference?: true
    imageUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentEvidenceCountAggregateInputType = {
    id?: true
    clientId?: true
    uploadedBy?: true
    amount?: true
    currency?: true
    paymentDate?: true
    bank?: true
    reference?: true
    imageUrl?: true
    ocrRaw?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentEvidenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentEvidence to aggregate.
     */
    where?: PaymentEvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvidences to fetch.
     */
    orderBy?: PaymentEvidenceOrderByWithRelationInput | PaymentEvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentEvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentEvidences
    **/
    _count?: true | PaymentEvidenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentEvidenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentEvidenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentEvidenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentEvidenceMaxAggregateInputType
  }

  export type GetPaymentEvidenceAggregateType<T extends PaymentEvidenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentEvidence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentEvidence[P]>
      : GetScalarType<T[P], AggregatePaymentEvidence[P]>
  }




  export type PaymentEvidenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentEvidenceWhereInput
    orderBy?: PaymentEvidenceOrderByWithAggregationInput | PaymentEvidenceOrderByWithAggregationInput[]
    by: PaymentEvidenceScalarFieldEnum[] | PaymentEvidenceScalarFieldEnum
    having?: PaymentEvidenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentEvidenceCountAggregateInputType | true
    _avg?: PaymentEvidenceAvgAggregateInputType
    _sum?: PaymentEvidenceSumAggregateInputType
    _min?: PaymentEvidenceMinAggregateInputType
    _max?: PaymentEvidenceMaxAggregateInputType
  }

  export type PaymentEvidenceGroupByOutputType = {
    id: string
    clientId: string
    uploadedBy: string
    amount: Decimal
    currency: string
    paymentDate: Date
    bank: string | null
    reference: string | null
    imageUrl: string | null
    ocrRaw: JsonValue | null
    status: $Enums.EvidenceStatus
    createdAt: Date
    updatedAt: Date
    _count: PaymentEvidenceCountAggregateOutputType | null
    _avg: PaymentEvidenceAvgAggregateOutputType | null
    _sum: PaymentEvidenceSumAggregateOutputType | null
    _min: PaymentEvidenceMinAggregateOutputType | null
    _max: PaymentEvidenceMaxAggregateOutputType | null
  }

  type GetPaymentEvidenceGroupByPayload<T extends PaymentEvidenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentEvidenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentEvidenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentEvidenceGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentEvidenceGroupByOutputType[P]>
        }
      >
    >


  export type PaymentEvidenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    uploadedBy?: boolean
    amount?: boolean
    currency?: boolean
    paymentDate?: boolean
    bank?: boolean
    reference?: boolean
    imageUrl?: boolean
    ocrRaw?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentEvidence"]>

  export type PaymentEvidenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    uploadedBy?: boolean
    amount?: boolean
    currency?: boolean
    paymentDate?: boolean
    bank?: boolean
    reference?: boolean
    imageUrl?: boolean
    ocrRaw?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentEvidence"]>

  export type PaymentEvidenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    uploadedBy?: boolean
    amount?: boolean
    currency?: boolean
    paymentDate?: boolean
    bank?: boolean
    reference?: boolean
    imageUrl?: boolean
    ocrRaw?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentEvidence"]>

  export type PaymentEvidenceSelectScalar = {
    id?: boolean
    clientId?: boolean
    uploadedBy?: boolean
    amount?: boolean
    currency?: boolean
    paymentDate?: boolean
    bank?: boolean
    reference?: boolean
    imageUrl?: boolean
    ocrRaw?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentEvidenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "uploadedBy" | "amount" | "currency" | "paymentDate" | "bank" | "reference" | "imageUrl" | "ocrRaw" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentEvidence"]>
  export type PaymentEvidenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentEvidenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentEvidenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentEvidencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentEvidence"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      uploadedBy: string
      amount: Prisma.Decimal
      currency: string
      paymentDate: Date
      bank: string | null
      reference: string | null
      imageUrl: string | null
      ocrRaw: Prisma.JsonValue | null
      status: $Enums.EvidenceStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentEvidence"]>
    composites: {}
  }

  type PaymentEvidenceGetPayload<S extends boolean | null | undefined | PaymentEvidenceDefaultArgs> = $Result.GetResult<Prisma.$PaymentEvidencePayload, S>

  type PaymentEvidenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentEvidenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentEvidenceCountAggregateInputType | true
    }

  export interface PaymentEvidenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentEvidence'], meta: { name: 'PaymentEvidence' } }
    /**
     * Find zero or one PaymentEvidence that matches the filter.
     * @param {PaymentEvidenceFindUniqueArgs} args - Arguments to find a PaymentEvidence
     * @example
     * // Get one PaymentEvidence
     * const paymentEvidence = await prisma.paymentEvidence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentEvidenceFindUniqueArgs>(args: SelectSubset<T, PaymentEvidenceFindUniqueArgs<ExtArgs>>): Prisma__PaymentEvidenceClient<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentEvidence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentEvidenceFindUniqueOrThrowArgs} args - Arguments to find a PaymentEvidence
     * @example
     * // Get one PaymentEvidence
     * const paymentEvidence = await prisma.paymentEvidence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentEvidenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentEvidenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentEvidenceClient<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentEvidence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEvidenceFindFirstArgs} args - Arguments to find a PaymentEvidence
     * @example
     * // Get one PaymentEvidence
     * const paymentEvidence = await prisma.paymentEvidence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentEvidenceFindFirstArgs>(args?: SelectSubset<T, PaymentEvidenceFindFirstArgs<ExtArgs>>): Prisma__PaymentEvidenceClient<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentEvidence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEvidenceFindFirstOrThrowArgs} args - Arguments to find a PaymentEvidence
     * @example
     * // Get one PaymentEvidence
     * const paymentEvidence = await prisma.paymentEvidence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentEvidenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentEvidenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentEvidenceClient<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentEvidences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEvidenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentEvidences
     * const paymentEvidences = await prisma.paymentEvidence.findMany()
     * 
     * // Get first 10 PaymentEvidences
     * const paymentEvidences = await prisma.paymentEvidence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentEvidenceWithIdOnly = await prisma.paymentEvidence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentEvidenceFindManyArgs>(args?: SelectSubset<T, PaymentEvidenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentEvidence.
     * @param {PaymentEvidenceCreateArgs} args - Arguments to create a PaymentEvidence.
     * @example
     * // Create one PaymentEvidence
     * const PaymentEvidence = await prisma.paymentEvidence.create({
     *   data: {
     *     // ... data to create a PaymentEvidence
     *   }
     * })
     * 
     */
    create<T extends PaymentEvidenceCreateArgs>(args: SelectSubset<T, PaymentEvidenceCreateArgs<ExtArgs>>): Prisma__PaymentEvidenceClient<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentEvidences.
     * @param {PaymentEvidenceCreateManyArgs} args - Arguments to create many PaymentEvidences.
     * @example
     * // Create many PaymentEvidences
     * const paymentEvidence = await prisma.paymentEvidence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentEvidenceCreateManyArgs>(args?: SelectSubset<T, PaymentEvidenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentEvidences and returns the data saved in the database.
     * @param {PaymentEvidenceCreateManyAndReturnArgs} args - Arguments to create many PaymentEvidences.
     * @example
     * // Create many PaymentEvidences
     * const paymentEvidence = await prisma.paymentEvidence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentEvidences and only return the `id`
     * const paymentEvidenceWithIdOnly = await prisma.paymentEvidence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentEvidenceCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentEvidenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentEvidence.
     * @param {PaymentEvidenceDeleteArgs} args - Arguments to delete one PaymentEvidence.
     * @example
     * // Delete one PaymentEvidence
     * const PaymentEvidence = await prisma.paymentEvidence.delete({
     *   where: {
     *     // ... filter to delete one PaymentEvidence
     *   }
     * })
     * 
     */
    delete<T extends PaymentEvidenceDeleteArgs>(args: SelectSubset<T, PaymentEvidenceDeleteArgs<ExtArgs>>): Prisma__PaymentEvidenceClient<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentEvidence.
     * @param {PaymentEvidenceUpdateArgs} args - Arguments to update one PaymentEvidence.
     * @example
     * // Update one PaymentEvidence
     * const paymentEvidence = await prisma.paymentEvidence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentEvidenceUpdateArgs>(args: SelectSubset<T, PaymentEvidenceUpdateArgs<ExtArgs>>): Prisma__PaymentEvidenceClient<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentEvidences.
     * @param {PaymentEvidenceDeleteManyArgs} args - Arguments to filter PaymentEvidences to delete.
     * @example
     * // Delete a few PaymentEvidences
     * const { count } = await prisma.paymentEvidence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentEvidenceDeleteManyArgs>(args?: SelectSubset<T, PaymentEvidenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentEvidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEvidenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentEvidences
     * const paymentEvidence = await prisma.paymentEvidence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentEvidenceUpdateManyArgs>(args: SelectSubset<T, PaymentEvidenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentEvidences and returns the data updated in the database.
     * @param {PaymentEvidenceUpdateManyAndReturnArgs} args - Arguments to update many PaymentEvidences.
     * @example
     * // Update many PaymentEvidences
     * const paymentEvidence = await prisma.paymentEvidence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentEvidences and only return the `id`
     * const paymentEvidenceWithIdOnly = await prisma.paymentEvidence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentEvidenceUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentEvidenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentEvidence.
     * @param {PaymentEvidenceUpsertArgs} args - Arguments to update or create a PaymentEvidence.
     * @example
     * // Update or create a PaymentEvidence
     * const paymentEvidence = await prisma.paymentEvidence.upsert({
     *   create: {
     *     // ... data to create a PaymentEvidence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentEvidence we want to update
     *   }
     * })
     */
    upsert<T extends PaymentEvidenceUpsertArgs>(args: SelectSubset<T, PaymentEvidenceUpsertArgs<ExtArgs>>): Prisma__PaymentEvidenceClient<$Result.GetResult<Prisma.$PaymentEvidencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentEvidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEvidenceCountArgs} args - Arguments to filter PaymentEvidences to count.
     * @example
     * // Count the number of PaymentEvidences
     * const count = await prisma.paymentEvidence.count({
     *   where: {
     *     // ... the filter for the PaymentEvidences we want to count
     *   }
     * })
    **/
    count<T extends PaymentEvidenceCountArgs>(
      args?: Subset<T, PaymentEvidenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentEvidenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentEvidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEvidenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentEvidenceAggregateArgs>(args: Subset<T, PaymentEvidenceAggregateArgs>): Prisma.PrismaPromise<GetPaymentEvidenceAggregateType<T>>

    /**
     * Group by PaymentEvidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEvidenceGroupByArgs} args - Group by arguments.
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
      T extends PaymentEvidenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentEvidenceGroupByArgs['orderBy'] }
        : { orderBy?: PaymentEvidenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentEvidenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentEvidenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentEvidence model
   */
  readonly fields: PaymentEvidenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentEvidence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentEvidenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentEvidence model
   */
  interface PaymentEvidenceFieldRefs {
    readonly id: FieldRef<"PaymentEvidence", 'String'>
    readonly clientId: FieldRef<"PaymentEvidence", 'String'>
    readonly uploadedBy: FieldRef<"PaymentEvidence", 'String'>
    readonly amount: FieldRef<"PaymentEvidence", 'Decimal'>
    readonly currency: FieldRef<"PaymentEvidence", 'String'>
    readonly paymentDate: FieldRef<"PaymentEvidence", 'DateTime'>
    readonly bank: FieldRef<"PaymentEvidence", 'String'>
    readonly reference: FieldRef<"PaymentEvidence", 'String'>
    readonly imageUrl: FieldRef<"PaymentEvidence", 'String'>
    readonly ocrRaw: FieldRef<"PaymentEvidence", 'Json'>
    readonly status: FieldRef<"PaymentEvidence", 'EvidenceStatus'>
    readonly createdAt: FieldRef<"PaymentEvidence", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentEvidence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentEvidence findUnique
   */
  export type PaymentEvidenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvidence to fetch.
     */
    where: PaymentEvidenceWhereUniqueInput
  }

  /**
   * PaymentEvidence findUniqueOrThrow
   */
  export type PaymentEvidenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvidence to fetch.
     */
    where: PaymentEvidenceWhereUniqueInput
  }

  /**
   * PaymentEvidence findFirst
   */
  export type PaymentEvidenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvidence to fetch.
     */
    where?: PaymentEvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvidences to fetch.
     */
    orderBy?: PaymentEvidenceOrderByWithRelationInput | PaymentEvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentEvidences.
     */
    cursor?: PaymentEvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentEvidences.
     */
    distinct?: PaymentEvidenceScalarFieldEnum | PaymentEvidenceScalarFieldEnum[]
  }

  /**
   * PaymentEvidence findFirstOrThrow
   */
  export type PaymentEvidenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvidence to fetch.
     */
    where?: PaymentEvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvidences to fetch.
     */
    orderBy?: PaymentEvidenceOrderByWithRelationInput | PaymentEvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentEvidences.
     */
    cursor?: PaymentEvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentEvidences.
     */
    distinct?: PaymentEvidenceScalarFieldEnum | PaymentEvidenceScalarFieldEnum[]
  }

  /**
   * PaymentEvidence findMany
   */
  export type PaymentEvidenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvidences to fetch.
     */
    where?: PaymentEvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvidences to fetch.
     */
    orderBy?: PaymentEvidenceOrderByWithRelationInput | PaymentEvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentEvidences.
     */
    cursor?: PaymentEvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentEvidences.
     */
    distinct?: PaymentEvidenceScalarFieldEnum | PaymentEvidenceScalarFieldEnum[]
  }

  /**
   * PaymentEvidence create
   */
  export type PaymentEvidenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentEvidence.
     */
    data: XOR<PaymentEvidenceCreateInput, PaymentEvidenceUncheckedCreateInput>
  }

  /**
   * PaymentEvidence createMany
   */
  export type PaymentEvidenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentEvidences.
     */
    data: PaymentEvidenceCreateManyInput | PaymentEvidenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentEvidence createManyAndReturn
   */
  export type PaymentEvidenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentEvidences.
     */
    data: PaymentEvidenceCreateManyInput | PaymentEvidenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentEvidence update
   */
  export type PaymentEvidenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentEvidence.
     */
    data: XOR<PaymentEvidenceUpdateInput, PaymentEvidenceUncheckedUpdateInput>
    /**
     * Choose, which PaymentEvidence to update.
     */
    where: PaymentEvidenceWhereUniqueInput
  }

  /**
   * PaymentEvidence updateMany
   */
  export type PaymentEvidenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentEvidences.
     */
    data: XOR<PaymentEvidenceUpdateManyMutationInput, PaymentEvidenceUncheckedUpdateManyInput>
    /**
     * Filter which PaymentEvidences to update
     */
    where?: PaymentEvidenceWhereInput
    /**
     * Limit how many PaymentEvidences to update.
     */
    limit?: number
  }

  /**
   * PaymentEvidence updateManyAndReturn
   */
  export type PaymentEvidenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * The data used to update PaymentEvidences.
     */
    data: XOR<PaymentEvidenceUpdateManyMutationInput, PaymentEvidenceUncheckedUpdateManyInput>
    /**
     * Filter which PaymentEvidences to update
     */
    where?: PaymentEvidenceWhereInput
    /**
     * Limit how many PaymentEvidences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentEvidence upsert
   */
  export type PaymentEvidenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentEvidence to update in case it exists.
     */
    where: PaymentEvidenceWhereUniqueInput
    /**
     * In case the PaymentEvidence found by the `where` argument doesn't exist, create a new PaymentEvidence with this data.
     */
    create: XOR<PaymentEvidenceCreateInput, PaymentEvidenceUncheckedCreateInput>
    /**
     * In case the PaymentEvidence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentEvidenceUpdateInput, PaymentEvidenceUncheckedUpdateInput>
  }

  /**
   * PaymentEvidence delete
   */
  export type PaymentEvidenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
    /**
     * Filter which PaymentEvidence to delete.
     */
    where: PaymentEvidenceWhereUniqueInput
  }

  /**
   * PaymentEvidence deleteMany
   */
  export type PaymentEvidenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentEvidences to delete
     */
    where?: PaymentEvidenceWhereInput
    /**
     * Limit how many PaymentEvidences to delete.
     */
    limit?: number
  }

  /**
   * PaymentEvidence without action
   */
  export type PaymentEvidenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvidence
     */
    select?: PaymentEvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvidence
     */
    omit?: PaymentEvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEvidenceInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    erpClientId: 'erpClientId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const UserClientScalarFieldEnum: {
    userId: 'userId',
    clientId: 'clientId',
    role: 'role'
  };

  export type UserClientScalarFieldEnum = (typeof UserClientScalarFieldEnum)[keyof typeof UserClientScalarFieldEnum]


  export const PaymentEvidenceScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    uploadedBy: 'uploadedBy',
    amount: 'amount',
    currency: 'currency',
    paymentDate: 'paymentDate',
    bank: 'bank',
    reference: 'reference',
    imageUrl: 'imageUrl',
    ocrRaw: 'ocrRaw',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentEvidenceScalarFieldEnum = (typeof PaymentEvidenceScalarFieldEnum)[keyof typeof PaymentEvidenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'EvidenceStatus'
   */
  export type EnumEvidenceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvidenceStatus'>
    


  /**
   * Reference to a field of type 'EvidenceStatus[]'
   */
  export type ListEnumEvidenceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvidenceStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userClients?: UserClientListRelationFilter
    evidences?: PaymentEvidenceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userClients?: UserClientOrderByRelationAggregateInput
    evidences?: PaymentEvidenceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userClients?: UserClientListRelationFilter
    evidences?: PaymentEvidenceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    erpClientId?: StringFilter<"Client"> | string
    isActive?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userClients?: UserClientListRelationFilter
    evidences?: PaymentEvidenceListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    erpClientId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userClients?: UserClientOrderByRelationAggregateInput
    evidences?: PaymentEvidenceOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    erpClientId?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    isActive?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userClients?: UserClientListRelationFilter
    evidences?: PaymentEvidenceListRelationFilter
  }, "id" | "erpClientId">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    erpClientId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    erpClientId?: StringWithAggregatesFilter<"Client"> | string
    isActive?: BoolWithAggregatesFilter<"Client"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type UserClientWhereInput = {
    AND?: UserClientWhereInput | UserClientWhereInput[]
    OR?: UserClientWhereInput[]
    NOT?: UserClientWhereInput | UserClientWhereInput[]
    userId?: StringFilter<"UserClient"> | string
    clientId?: StringFilter<"UserClient"> | string
    role?: EnumRoleFilter<"UserClient"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type UserClientOrderByWithRelationInput = {
    userId?: SortOrder
    clientId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
  }

  export type UserClientWhereUniqueInput = Prisma.AtLeast<{
    userId_clientId?: UserClientUserIdClientIdCompoundUniqueInput
    AND?: UserClientWhereInput | UserClientWhereInput[]
    OR?: UserClientWhereInput[]
    NOT?: UserClientWhereInput | UserClientWhereInput[]
    userId?: StringFilter<"UserClient"> | string
    clientId?: StringFilter<"UserClient"> | string
    role?: EnumRoleFilter<"UserClient"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "userId_clientId">

  export type UserClientOrderByWithAggregationInput = {
    userId?: SortOrder
    clientId?: SortOrder
    role?: SortOrder
    _count?: UserClientCountOrderByAggregateInput
    _max?: UserClientMaxOrderByAggregateInput
    _min?: UserClientMinOrderByAggregateInput
  }

  export type UserClientScalarWhereWithAggregatesInput = {
    AND?: UserClientScalarWhereWithAggregatesInput | UserClientScalarWhereWithAggregatesInput[]
    OR?: UserClientScalarWhereWithAggregatesInput[]
    NOT?: UserClientScalarWhereWithAggregatesInput | UserClientScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserClient"> | string
    clientId?: StringWithAggregatesFilter<"UserClient"> | string
    role?: EnumRoleWithAggregatesFilter<"UserClient"> | $Enums.Role
  }

  export type PaymentEvidenceWhereInput = {
    AND?: PaymentEvidenceWhereInput | PaymentEvidenceWhereInput[]
    OR?: PaymentEvidenceWhereInput[]
    NOT?: PaymentEvidenceWhereInput | PaymentEvidenceWhereInput[]
    id?: StringFilter<"PaymentEvidence"> | string
    clientId?: StringFilter<"PaymentEvidence"> | string
    uploadedBy?: StringFilter<"PaymentEvidence"> | string
    amount?: DecimalFilter<"PaymentEvidence"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"PaymentEvidence"> | string
    paymentDate?: DateTimeFilter<"PaymentEvidence"> | Date | string
    bank?: StringNullableFilter<"PaymentEvidence"> | string | null
    reference?: StringNullableFilter<"PaymentEvidence"> | string | null
    imageUrl?: StringNullableFilter<"PaymentEvidence"> | string | null
    ocrRaw?: JsonNullableFilter<"PaymentEvidence">
    status?: EnumEvidenceStatusFilter<"PaymentEvidence"> | $Enums.EvidenceStatus
    createdAt?: DateTimeFilter<"PaymentEvidence"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentEvidence"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentEvidenceOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    uploadedBy?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentDate?: SortOrder
    bank?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    ocrRaw?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PaymentEvidenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentEvidenceWhereInput | PaymentEvidenceWhereInput[]
    OR?: PaymentEvidenceWhereInput[]
    NOT?: PaymentEvidenceWhereInput | PaymentEvidenceWhereInput[]
    clientId?: StringFilter<"PaymentEvidence"> | string
    uploadedBy?: StringFilter<"PaymentEvidence"> | string
    amount?: DecimalFilter<"PaymentEvidence"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"PaymentEvidence"> | string
    paymentDate?: DateTimeFilter<"PaymentEvidence"> | Date | string
    bank?: StringNullableFilter<"PaymentEvidence"> | string | null
    reference?: StringNullableFilter<"PaymentEvidence"> | string | null
    imageUrl?: StringNullableFilter<"PaymentEvidence"> | string | null
    ocrRaw?: JsonNullableFilter<"PaymentEvidence">
    status?: EnumEvidenceStatusFilter<"PaymentEvidence"> | $Enums.EvidenceStatus
    createdAt?: DateTimeFilter<"PaymentEvidence"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentEvidence"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentEvidenceOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    uploadedBy?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentDate?: SortOrder
    bank?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    ocrRaw?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentEvidenceCountOrderByAggregateInput
    _avg?: PaymentEvidenceAvgOrderByAggregateInput
    _max?: PaymentEvidenceMaxOrderByAggregateInput
    _min?: PaymentEvidenceMinOrderByAggregateInput
    _sum?: PaymentEvidenceSumOrderByAggregateInput
  }

  export type PaymentEvidenceScalarWhereWithAggregatesInput = {
    AND?: PaymentEvidenceScalarWhereWithAggregatesInput | PaymentEvidenceScalarWhereWithAggregatesInput[]
    OR?: PaymentEvidenceScalarWhereWithAggregatesInput[]
    NOT?: PaymentEvidenceScalarWhereWithAggregatesInput | PaymentEvidenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentEvidence"> | string
    clientId?: StringWithAggregatesFilter<"PaymentEvidence"> | string
    uploadedBy?: StringWithAggregatesFilter<"PaymentEvidence"> | string
    amount?: DecimalWithAggregatesFilter<"PaymentEvidence"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"PaymentEvidence"> | string
    paymentDate?: DateTimeWithAggregatesFilter<"PaymentEvidence"> | Date | string
    bank?: StringNullableWithAggregatesFilter<"PaymentEvidence"> | string | null
    reference?: StringNullableWithAggregatesFilter<"PaymentEvidence"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"PaymentEvidence"> | string | null
    ocrRaw?: JsonNullableWithAggregatesFilter<"PaymentEvidence">
    status?: EnumEvidenceStatusWithAggregatesFilter<"PaymentEvidence"> | $Enums.EvidenceStatus
    createdAt?: DateTimeWithAggregatesFilter<"PaymentEvidence"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentEvidence"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userClients?: UserClientCreateNestedManyWithoutUserInput
    evidences?: PaymentEvidenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userClients?: UserClientUncheckedCreateNestedManyWithoutUserInput
    evidences?: PaymentEvidenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userClients?: UserClientUpdateManyWithoutUserNestedInput
    evidences?: PaymentEvidenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userClients?: UserClientUncheckedUpdateManyWithoutUserNestedInput
    evidences?: PaymentEvidenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    erpClientId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userClients?: UserClientCreateNestedManyWithoutClientInput
    evidences?: PaymentEvidenceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    erpClientId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userClients?: UserClientUncheckedCreateNestedManyWithoutClientInput
    evidences?: PaymentEvidenceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    erpClientId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userClients?: UserClientUpdateManyWithoutClientNestedInput
    evidences?: PaymentEvidenceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    erpClientId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userClients?: UserClientUncheckedUpdateManyWithoutClientNestedInput
    evidences?: PaymentEvidenceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    erpClientId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    erpClientId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    erpClientId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserClientCreateInput = {
    role?: $Enums.Role
    user: UserCreateNestedOneWithoutUserClientsInput
    client: ClientCreateNestedOneWithoutUserClientsInput
  }

  export type UserClientUncheckedCreateInput = {
    userId: string
    clientId: string
    role?: $Enums.Role
  }

  export type UserClientUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutUserClientsNestedInput
    client?: ClientUpdateOneRequiredWithoutUserClientsNestedInput
  }

  export type UserClientUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserClientCreateManyInput = {
    userId: string
    clientId: string
    role?: $Enums.Role
  }

  export type UserClientUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserClientUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PaymentEvidenceCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentDate: Date | string
    bank?: string | null
    reference?: string | null
    imageUrl?: string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EvidenceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutEvidencesInput
    user: UserCreateNestedOneWithoutEvidencesInput
  }

  export type PaymentEvidenceUncheckedCreateInput = {
    id?: string
    clientId: string
    uploadedBy: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentDate: Date | string
    bank?: string | null
    reference?: string | null
    imageUrl?: string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EvidenceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentEvidenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEvidenceStatusFieldUpdateOperationsInput | $Enums.EvidenceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutEvidencesNestedInput
    user?: UserUpdateOneRequiredWithoutEvidencesNestedInput
  }

  export type PaymentEvidenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEvidenceStatusFieldUpdateOperationsInput | $Enums.EvidenceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEvidenceCreateManyInput = {
    id?: string
    clientId: string
    uploadedBy: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentDate: Date | string
    bank?: string | null
    reference?: string | null
    imageUrl?: string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EvidenceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentEvidenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEvidenceStatusFieldUpdateOperationsInput | $Enums.EvidenceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEvidenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEvidenceStatusFieldUpdateOperationsInput | $Enums.EvidenceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserClientListRelationFilter = {
    every?: UserClientWhereInput
    some?: UserClientWhereInput
    none?: UserClientWhereInput
  }

  export type PaymentEvidenceListRelationFilter = {
    every?: PaymentEvidenceWhereInput
    some?: PaymentEvidenceWhereInput
    none?: PaymentEvidenceWhereInput
  }

  export type UserClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentEvidenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    erpClientId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    erpClientId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    erpClientId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type UserClientUserIdClientIdCompoundUniqueInput = {
    userId: string
    clientId: string
  }

  export type UserClientCountOrderByAggregateInput = {
    userId?: SortOrder
    clientId?: SortOrder
    role?: SortOrder
  }

  export type UserClientMaxOrderByAggregateInput = {
    userId?: SortOrder
    clientId?: SortOrder
    role?: SortOrder
  }

  export type UserClientMinOrderByAggregateInput = {
    userId?: SortOrder
    clientId?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumEvidenceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EvidenceStatus | EnumEvidenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvidenceStatus[] | ListEnumEvidenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvidenceStatus[] | ListEnumEvidenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvidenceStatusFilter<$PrismaModel> | $Enums.EvidenceStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentEvidenceCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    uploadedBy?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentDate?: SortOrder
    bank?: SortOrder
    reference?: SortOrder
    imageUrl?: SortOrder
    ocrRaw?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentEvidenceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentEvidenceMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    uploadedBy?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentDate?: SortOrder
    bank?: SortOrder
    reference?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentEvidenceMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    uploadedBy?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentDate?: SortOrder
    bank?: SortOrder
    reference?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentEvidenceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumEvidenceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvidenceStatus | EnumEvidenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvidenceStatus[] | ListEnumEvidenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvidenceStatus[] | ListEnumEvidenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvidenceStatusWithAggregatesFilter<$PrismaModel> | $Enums.EvidenceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvidenceStatusFilter<$PrismaModel>
    _max?: NestedEnumEvidenceStatusFilter<$PrismaModel>
  }

  export type UserClientCreateNestedManyWithoutUserInput = {
    create?: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput> | UserClientCreateWithoutUserInput[] | UserClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutUserInput | UserClientCreateOrConnectWithoutUserInput[]
    createMany?: UserClientCreateManyUserInputEnvelope
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
  }

  export type PaymentEvidenceCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentEvidenceCreateWithoutUserInput, PaymentEvidenceUncheckedCreateWithoutUserInput> | PaymentEvidenceCreateWithoutUserInput[] | PaymentEvidenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentEvidenceCreateOrConnectWithoutUserInput | PaymentEvidenceCreateOrConnectWithoutUserInput[]
    createMany?: PaymentEvidenceCreateManyUserInputEnvelope
    connect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
  }

  export type UserClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput> | UserClientCreateWithoutUserInput[] | UserClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutUserInput | UserClientCreateOrConnectWithoutUserInput[]
    createMany?: UserClientCreateManyUserInputEnvelope
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
  }

  export type PaymentEvidenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentEvidenceCreateWithoutUserInput, PaymentEvidenceUncheckedCreateWithoutUserInput> | PaymentEvidenceCreateWithoutUserInput[] | PaymentEvidenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentEvidenceCreateOrConnectWithoutUserInput | PaymentEvidenceCreateOrConnectWithoutUserInput[]
    createMany?: PaymentEvidenceCreateManyUserInputEnvelope
    connect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput> | UserClientCreateWithoutUserInput[] | UserClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutUserInput | UserClientCreateOrConnectWithoutUserInput[]
    upsert?: UserClientUpsertWithWhereUniqueWithoutUserInput | UserClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserClientCreateManyUserInputEnvelope
    set?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    disconnect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    delete?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    update?: UserClientUpdateWithWhereUniqueWithoutUserInput | UserClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserClientUpdateManyWithWhereWithoutUserInput | UserClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
  }

  export type PaymentEvidenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentEvidenceCreateWithoutUserInput, PaymentEvidenceUncheckedCreateWithoutUserInput> | PaymentEvidenceCreateWithoutUserInput[] | PaymentEvidenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentEvidenceCreateOrConnectWithoutUserInput | PaymentEvidenceCreateOrConnectWithoutUserInput[]
    upsert?: PaymentEvidenceUpsertWithWhereUniqueWithoutUserInput | PaymentEvidenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentEvidenceCreateManyUserInputEnvelope
    set?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    disconnect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    delete?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    connect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    update?: PaymentEvidenceUpdateWithWhereUniqueWithoutUserInput | PaymentEvidenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentEvidenceUpdateManyWithWhereWithoutUserInput | PaymentEvidenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentEvidenceScalarWhereInput | PaymentEvidenceScalarWhereInput[]
  }

  export type UserClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput> | UserClientCreateWithoutUserInput[] | UserClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutUserInput | UserClientCreateOrConnectWithoutUserInput[]
    upsert?: UserClientUpsertWithWhereUniqueWithoutUserInput | UserClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserClientCreateManyUserInputEnvelope
    set?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    disconnect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    delete?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    update?: UserClientUpdateWithWhereUniqueWithoutUserInput | UserClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserClientUpdateManyWithWhereWithoutUserInput | UserClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
  }

  export type PaymentEvidenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentEvidenceCreateWithoutUserInput, PaymentEvidenceUncheckedCreateWithoutUserInput> | PaymentEvidenceCreateWithoutUserInput[] | PaymentEvidenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentEvidenceCreateOrConnectWithoutUserInput | PaymentEvidenceCreateOrConnectWithoutUserInput[]
    upsert?: PaymentEvidenceUpsertWithWhereUniqueWithoutUserInput | PaymentEvidenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentEvidenceCreateManyUserInputEnvelope
    set?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    disconnect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    delete?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    connect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    update?: PaymentEvidenceUpdateWithWhereUniqueWithoutUserInput | PaymentEvidenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentEvidenceUpdateManyWithWhereWithoutUserInput | PaymentEvidenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentEvidenceScalarWhereInput | PaymentEvidenceScalarWhereInput[]
  }

  export type UserClientCreateNestedManyWithoutClientInput = {
    create?: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput> | UserClientCreateWithoutClientInput[] | UserClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutClientInput | UserClientCreateOrConnectWithoutClientInput[]
    createMany?: UserClientCreateManyClientInputEnvelope
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
  }

  export type PaymentEvidenceCreateNestedManyWithoutClientInput = {
    create?: XOR<PaymentEvidenceCreateWithoutClientInput, PaymentEvidenceUncheckedCreateWithoutClientInput> | PaymentEvidenceCreateWithoutClientInput[] | PaymentEvidenceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentEvidenceCreateOrConnectWithoutClientInput | PaymentEvidenceCreateOrConnectWithoutClientInput[]
    createMany?: PaymentEvidenceCreateManyClientInputEnvelope
    connect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
  }

  export type UserClientUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput> | UserClientCreateWithoutClientInput[] | UserClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutClientInput | UserClientCreateOrConnectWithoutClientInput[]
    createMany?: UserClientCreateManyClientInputEnvelope
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
  }

  export type PaymentEvidenceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<PaymentEvidenceCreateWithoutClientInput, PaymentEvidenceUncheckedCreateWithoutClientInput> | PaymentEvidenceCreateWithoutClientInput[] | PaymentEvidenceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentEvidenceCreateOrConnectWithoutClientInput | PaymentEvidenceCreateOrConnectWithoutClientInput[]
    createMany?: PaymentEvidenceCreateManyClientInputEnvelope
    connect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
  }

  export type UserClientUpdateManyWithoutClientNestedInput = {
    create?: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput> | UserClientCreateWithoutClientInput[] | UserClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutClientInput | UserClientCreateOrConnectWithoutClientInput[]
    upsert?: UserClientUpsertWithWhereUniqueWithoutClientInput | UserClientUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: UserClientCreateManyClientInputEnvelope
    set?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    disconnect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    delete?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    update?: UserClientUpdateWithWhereUniqueWithoutClientInput | UserClientUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: UserClientUpdateManyWithWhereWithoutClientInput | UserClientUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
  }

  export type PaymentEvidenceUpdateManyWithoutClientNestedInput = {
    create?: XOR<PaymentEvidenceCreateWithoutClientInput, PaymentEvidenceUncheckedCreateWithoutClientInput> | PaymentEvidenceCreateWithoutClientInput[] | PaymentEvidenceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentEvidenceCreateOrConnectWithoutClientInput | PaymentEvidenceCreateOrConnectWithoutClientInput[]
    upsert?: PaymentEvidenceUpsertWithWhereUniqueWithoutClientInput | PaymentEvidenceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PaymentEvidenceCreateManyClientInputEnvelope
    set?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    disconnect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    delete?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    connect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    update?: PaymentEvidenceUpdateWithWhereUniqueWithoutClientInput | PaymentEvidenceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PaymentEvidenceUpdateManyWithWhereWithoutClientInput | PaymentEvidenceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PaymentEvidenceScalarWhereInput | PaymentEvidenceScalarWhereInput[]
  }

  export type UserClientUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput> | UserClientCreateWithoutClientInput[] | UserClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutClientInput | UserClientCreateOrConnectWithoutClientInput[]
    upsert?: UserClientUpsertWithWhereUniqueWithoutClientInput | UserClientUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: UserClientCreateManyClientInputEnvelope
    set?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    disconnect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    delete?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    update?: UserClientUpdateWithWhereUniqueWithoutClientInput | UserClientUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: UserClientUpdateManyWithWhereWithoutClientInput | UserClientUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
  }

  export type PaymentEvidenceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<PaymentEvidenceCreateWithoutClientInput, PaymentEvidenceUncheckedCreateWithoutClientInput> | PaymentEvidenceCreateWithoutClientInput[] | PaymentEvidenceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentEvidenceCreateOrConnectWithoutClientInput | PaymentEvidenceCreateOrConnectWithoutClientInput[]
    upsert?: PaymentEvidenceUpsertWithWhereUniqueWithoutClientInput | PaymentEvidenceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PaymentEvidenceCreateManyClientInputEnvelope
    set?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    disconnect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    delete?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    connect?: PaymentEvidenceWhereUniqueInput | PaymentEvidenceWhereUniqueInput[]
    update?: PaymentEvidenceUpdateWithWhereUniqueWithoutClientInput | PaymentEvidenceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PaymentEvidenceUpdateManyWithWhereWithoutClientInput | PaymentEvidenceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PaymentEvidenceScalarWhereInput | PaymentEvidenceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserClientsInput = {
    create?: XOR<UserCreateWithoutUserClientsInput, UserUncheckedCreateWithoutUserClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserClientsInput
    connect?: UserWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutUserClientsInput = {
    create?: XOR<ClientCreateWithoutUserClientsInput, ClientUncheckedCreateWithoutUserClientsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserClientsInput
    connect?: ClientWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneRequiredWithoutUserClientsNestedInput = {
    create?: XOR<UserCreateWithoutUserClientsInput, UserUncheckedCreateWithoutUserClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserClientsInput
    upsert?: UserUpsertWithoutUserClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserClientsInput, UserUpdateWithoutUserClientsInput>, UserUncheckedUpdateWithoutUserClientsInput>
  }

  export type ClientUpdateOneRequiredWithoutUserClientsNestedInput = {
    create?: XOR<ClientCreateWithoutUserClientsInput, ClientUncheckedCreateWithoutUserClientsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserClientsInput
    upsert?: ClientUpsertWithoutUserClientsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutUserClientsInput, ClientUpdateWithoutUserClientsInput>, ClientUncheckedUpdateWithoutUserClientsInput>
  }

  export type ClientCreateNestedOneWithoutEvidencesInput = {
    create?: XOR<ClientCreateWithoutEvidencesInput, ClientUncheckedCreateWithoutEvidencesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEvidencesInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEvidencesInput = {
    create?: XOR<UserCreateWithoutEvidencesInput, UserUncheckedCreateWithoutEvidencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvidencesInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumEvidenceStatusFieldUpdateOperationsInput = {
    set?: $Enums.EvidenceStatus
  }

  export type ClientUpdateOneRequiredWithoutEvidencesNestedInput = {
    create?: XOR<ClientCreateWithoutEvidencesInput, ClientUncheckedCreateWithoutEvidencesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEvidencesInput
    upsert?: ClientUpsertWithoutEvidencesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutEvidencesInput, ClientUpdateWithoutEvidencesInput>, ClientUncheckedUpdateWithoutEvidencesInput>
  }

  export type UserUpdateOneRequiredWithoutEvidencesNestedInput = {
    create?: XOR<UserCreateWithoutEvidencesInput, UserUncheckedCreateWithoutEvidencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvidencesInput
    upsert?: UserUpsertWithoutEvidencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvidencesInput, UserUpdateWithoutEvidencesInput>, UserUncheckedUpdateWithoutEvidencesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEvidenceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EvidenceStatus | EnumEvidenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvidenceStatus[] | ListEnumEvidenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvidenceStatus[] | ListEnumEvidenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvidenceStatusFilter<$PrismaModel> | $Enums.EvidenceStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumEvidenceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvidenceStatus | EnumEvidenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvidenceStatus[] | ListEnumEvidenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvidenceStatus[] | ListEnumEvidenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvidenceStatusWithAggregatesFilter<$PrismaModel> | $Enums.EvidenceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvidenceStatusFilter<$PrismaModel>
    _max?: NestedEnumEvidenceStatusFilter<$PrismaModel>
  }

  export type UserClientCreateWithoutUserInput = {
    role?: $Enums.Role
    client: ClientCreateNestedOneWithoutUserClientsInput
  }

  export type UserClientUncheckedCreateWithoutUserInput = {
    clientId: string
    role?: $Enums.Role
  }

  export type UserClientCreateOrConnectWithoutUserInput = {
    where: UserClientWhereUniqueInput
    create: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput>
  }

  export type UserClientCreateManyUserInputEnvelope = {
    data: UserClientCreateManyUserInput | UserClientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentEvidenceCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentDate: Date | string
    bank?: string | null
    reference?: string | null
    imageUrl?: string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EvidenceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutEvidencesInput
  }

  export type PaymentEvidenceUncheckedCreateWithoutUserInput = {
    id?: string
    clientId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentDate: Date | string
    bank?: string | null
    reference?: string | null
    imageUrl?: string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EvidenceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentEvidenceCreateOrConnectWithoutUserInput = {
    where: PaymentEvidenceWhereUniqueInput
    create: XOR<PaymentEvidenceCreateWithoutUserInput, PaymentEvidenceUncheckedCreateWithoutUserInput>
  }

  export type PaymentEvidenceCreateManyUserInputEnvelope = {
    data: PaymentEvidenceCreateManyUserInput | PaymentEvidenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserClientUpsertWithWhereUniqueWithoutUserInput = {
    where: UserClientWhereUniqueInput
    update: XOR<UserClientUpdateWithoutUserInput, UserClientUncheckedUpdateWithoutUserInput>
    create: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput>
  }

  export type UserClientUpdateWithWhereUniqueWithoutUserInput = {
    where: UserClientWhereUniqueInput
    data: XOR<UserClientUpdateWithoutUserInput, UserClientUncheckedUpdateWithoutUserInput>
  }

  export type UserClientUpdateManyWithWhereWithoutUserInput = {
    where: UserClientScalarWhereInput
    data: XOR<UserClientUpdateManyMutationInput, UserClientUncheckedUpdateManyWithoutUserInput>
  }

  export type UserClientScalarWhereInput = {
    AND?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
    OR?: UserClientScalarWhereInput[]
    NOT?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
    userId?: StringFilter<"UserClient"> | string
    clientId?: StringFilter<"UserClient"> | string
    role?: EnumRoleFilter<"UserClient"> | $Enums.Role
  }

  export type PaymentEvidenceUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentEvidenceWhereUniqueInput
    update: XOR<PaymentEvidenceUpdateWithoutUserInput, PaymentEvidenceUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentEvidenceCreateWithoutUserInput, PaymentEvidenceUncheckedCreateWithoutUserInput>
  }

  export type PaymentEvidenceUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentEvidenceWhereUniqueInput
    data: XOR<PaymentEvidenceUpdateWithoutUserInput, PaymentEvidenceUncheckedUpdateWithoutUserInput>
  }

  export type PaymentEvidenceUpdateManyWithWhereWithoutUserInput = {
    where: PaymentEvidenceScalarWhereInput
    data: XOR<PaymentEvidenceUpdateManyMutationInput, PaymentEvidenceUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentEvidenceScalarWhereInput = {
    AND?: PaymentEvidenceScalarWhereInput | PaymentEvidenceScalarWhereInput[]
    OR?: PaymentEvidenceScalarWhereInput[]
    NOT?: PaymentEvidenceScalarWhereInput | PaymentEvidenceScalarWhereInput[]
    id?: StringFilter<"PaymentEvidence"> | string
    clientId?: StringFilter<"PaymentEvidence"> | string
    uploadedBy?: StringFilter<"PaymentEvidence"> | string
    amount?: DecimalFilter<"PaymentEvidence"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"PaymentEvidence"> | string
    paymentDate?: DateTimeFilter<"PaymentEvidence"> | Date | string
    bank?: StringNullableFilter<"PaymentEvidence"> | string | null
    reference?: StringNullableFilter<"PaymentEvidence"> | string | null
    imageUrl?: StringNullableFilter<"PaymentEvidence"> | string | null
    ocrRaw?: JsonNullableFilter<"PaymentEvidence">
    status?: EnumEvidenceStatusFilter<"PaymentEvidence"> | $Enums.EvidenceStatus
    createdAt?: DateTimeFilter<"PaymentEvidence"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentEvidence"> | Date | string
  }

  export type UserClientCreateWithoutClientInput = {
    role?: $Enums.Role
    user: UserCreateNestedOneWithoutUserClientsInput
  }

  export type UserClientUncheckedCreateWithoutClientInput = {
    userId: string
    role?: $Enums.Role
  }

  export type UserClientCreateOrConnectWithoutClientInput = {
    where: UserClientWhereUniqueInput
    create: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput>
  }

  export type UserClientCreateManyClientInputEnvelope = {
    data: UserClientCreateManyClientInput | UserClientCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type PaymentEvidenceCreateWithoutClientInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentDate: Date | string
    bank?: string | null
    reference?: string | null
    imageUrl?: string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EvidenceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEvidencesInput
  }

  export type PaymentEvidenceUncheckedCreateWithoutClientInput = {
    id?: string
    uploadedBy: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentDate: Date | string
    bank?: string | null
    reference?: string | null
    imageUrl?: string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EvidenceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentEvidenceCreateOrConnectWithoutClientInput = {
    where: PaymentEvidenceWhereUniqueInput
    create: XOR<PaymentEvidenceCreateWithoutClientInput, PaymentEvidenceUncheckedCreateWithoutClientInput>
  }

  export type PaymentEvidenceCreateManyClientInputEnvelope = {
    data: PaymentEvidenceCreateManyClientInput | PaymentEvidenceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserClientUpsertWithWhereUniqueWithoutClientInput = {
    where: UserClientWhereUniqueInput
    update: XOR<UserClientUpdateWithoutClientInput, UserClientUncheckedUpdateWithoutClientInput>
    create: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput>
  }

  export type UserClientUpdateWithWhereUniqueWithoutClientInput = {
    where: UserClientWhereUniqueInput
    data: XOR<UserClientUpdateWithoutClientInput, UserClientUncheckedUpdateWithoutClientInput>
  }

  export type UserClientUpdateManyWithWhereWithoutClientInput = {
    where: UserClientScalarWhereInput
    data: XOR<UserClientUpdateManyMutationInput, UserClientUncheckedUpdateManyWithoutClientInput>
  }

  export type PaymentEvidenceUpsertWithWhereUniqueWithoutClientInput = {
    where: PaymentEvidenceWhereUniqueInput
    update: XOR<PaymentEvidenceUpdateWithoutClientInput, PaymentEvidenceUncheckedUpdateWithoutClientInput>
    create: XOR<PaymentEvidenceCreateWithoutClientInput, PaymentEvidenceUncheckedCreateWithoutClientInput>
  }

  export type PaymentEvidenceUpdateWithWhereUniqueWithoutClientInput = {
    where: PaymentEvidenceWhereUniqueInput
    data: XOR<PaymentEvidenceUpdateWithoutClientInput, PaymentEvidenceUncheckedUpdateWithoutClientInput>
  }

  export type PaymentEvidenceUpdateManyWithWhereWithoutClientInput = {
    where: PaymentEvidenceScalarWhereInput
    data: XOR<PaymentEvidenceUpdateManyMutationInput, PaymentEvidenceUncheckedUpdateManyWithoutClientInput>
  }

  export type UserCreateWithoutUserClientsInput = {
    id?: string
    email: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    evidences?: PaymentEvidenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserClientsInput = {
    id?: string
    email: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    evidences?: PaymentEvidenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserClientsInput, UserUncheckedCreateWithoutUserClientsInput>
  }

  export type ClientCreateWithoutUserClientsInput = {
    id?: string
    name: string
    erpClientId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    evidences?: PaymentEvidenceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUserClientsInput = {
    id?: string
    name: string
    erpClientId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    evidences?: PaymentEvidenceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUserClientsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserClientsInput, ClientUncheckedCreateWithoutUserClientsInput>
  }

  export type UserUpsertWithoutUserClientsInput = {
    update: XOR<UserUpdateWithoutUserClientsInput, UserUncheckedUpdateWithoutUserClientsInput>
    create: XOR<UserCreateWithoutUserClientsInput, UserUncheckedCreateWithoutUserClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserClientsInput, UserUncheckedUpdateWithoutUserClientsInput>
  }

  export type UserUpdateWithoutUserClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidences?: PaymentEvidenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidences?: PaymentEvidenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientUpsertWithoutUserClientsInput = {
    update: XOR<ClientUpdateWithoutUserClientsInput, ClientUncheckedUpdateWithoutUserClientsInput>
    create: XOR<ClientCreateWithoutUserClientsInput, ClientUncheckedCreateWithoutUserClientsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutUserClientsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutUserClientsInput, ClientUncheckedUpdateWithoutUserClientsInput>
  }

  export type ClientUpdateWithoutUserClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    erpClientId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidences?: PaymentEvidenceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    erpClientId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidences?: PaymentEvidenceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutEvidencesInput = {
    id?: string
    name: string
    erpClientId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userClients?: UserClientCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutEvidencesInput = {
    id?: string
    name: string
    erpClientId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userClients?: UserClientUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutEvidencesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutEvidencesInput, ClientUncheckedCreateWithoutEvidencesInput>
  }

  export type UserCreateWithoutEvidencesInput = {
    id?: string
    email: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userClients?: UserClientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvidencesInput = {
    id?: string
    email: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userClients?: UserClientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvidencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvidencesInput, UserUncheckedCreateWithoutEvidencesInput>
  }

  export type ClientUpsertWithoutEvidencesInput = {
    update: XOR<ClientUpdateWithoutEvidencesInput, ClientUncheckedUpdateWithoutEvidencesInput>
    create: XOR<ClientCreateWithoutEvidencesInput, ClientUncheckedCreateWithoutEvidencesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutEvidencesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutEvidencesInput, ClientUncheckedUpdateWithoutEvidencesInput>
  }

  export type ClientUpdateWithoutEvidencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    erpClientId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userClients?: UserClientUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutEvidencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    erpClientId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userClients?: UserClientUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutEvidencesInput = {
    update: XOR<UserUpdateWithoutEvidencesInput, UserUncheckedUpdateWithoutEvidencesInput>
    create: XOR<UserCreateWithoutEvidencesInput, UserUncheckedCreateWithoutEvidencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvidencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvidencesInput, UserUncheckedUpdateWithoutEvidencesInput>
  }

  export type UserUpdateWithoutEvidencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userClients?: UserClientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvidencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userClients?: UserClientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserClientCreateManyUserInput = {
    clientId: string
    role?: $Enums.Role
  }

  export type PaymentEvidenceCreateManyUserInput = {
    id?: string
    clientId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentDate: Date | string
    bank?: string | null
    reference?: string | null
    imageUrl?: string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EvidenceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserClientUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    client?: ClientUpdateOneRequiredWithoutUserClientsNestedInput
  }

  export type UserClientUncheckedUpdateWithoutUserInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserClientUncheckedUpdateManyWithoutUserInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PaymentEvidenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEvidenceStatusFieldUpdateOperationsInput | $Enums.EvidenceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutEvidencesNestedInput
  }

  export type PaymentEvidenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEvidenceStatusFieldUpdateOperationsInput | $Enums.EvidenceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEvidenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEvidenceStatusFieldUpdateOperationsInput | $Enums.EvidenceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserClientCreateManyClientInput = {
    userId: string
    role?: $Enums.Role
  }

  export type PaymentEvidenceCreateManyClientInput = {
    id?: string
    uploadedBy: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    paymentDate: Date | string
    bank?: string | null
    reference?: string | null
    imageUrl?: string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.EvidenceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserClientUpdateWithoutClientInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutUserClientsNestedInput
  }

  export type UserClientUncheckedUpdateWithoutClientInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserClientUncheckedUpdateManyWithoutClientInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PaymentEvidenceUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEvidenceStatusFieldUpdateOperationsInput | $Enums.EvidenceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEvidencesNestedInput
  }

  export type PaymentEvidenceUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEvidenceStatusFieldUpdateOperationsInput | $Enums.EvidenceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEvidenceUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedBy?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ocrRaw?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumEvidenceStatusFieldUpdateOperationsInput | $Enums.EvidenceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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