/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v1/posts/{id}": {
    /** 글 */
    get: operations["getItem"];
    /** 글 수정 */
    put: operations["edit"];
  };
  "/api/v1/posts/temp": {
    /** 임시 글 생성 */
    post: operations["makeTemp"];
  };
  "/api/v1/members/logout": {
    /** 로그아웃 */
    post: operations["logout"];
  };
  "/api/v1/members/login": {
    /** 로그인, 로그인 성공시 accessToken, refreshToken 쿠키 설정 */
    post: operations["login"];
  };
  "/api/v1/posts": {
    /** 글 리스트 */
    get: operations["getItems"];
  };
  "/api/v1/posts/mine": {
    /** 내 글 리스트 */
    get: operations["getMine"];
  };
  "/api/v1/members/me": {
    /** 내 정보 */
    get: operations["getMe"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Empty: Record<string, never>;
    RsDataEmpty: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["Empty"];
      fail: boolean;
      success: boolean;
    };
    EditRequestBody: {
      body: string;
    };
    EditResponseBody: {
      item: components["schemas"]["PostDto"];
    };
    PostDto: {
      body?: string;
      /** Format: int64 */
      id: number;
      title: string;
      published: boolean;
      /** Format: date-time */
      modifyDate: string;
      /** Format: date-time */
      createDate: string;
      authorUsername: string;
      /** Format: int64 */
      authorId: number;
    };
    RsDataEditResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["EditResponseBody"];
      fail: boolean;
      success: boolean;
    };
    MakeTempResponseBody: {
      item: components["schemas"]["PostDto"];
    };
    RsDataMakeTempResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["MakeTempResponseBody"];
      fail: boolean;
      success: boolean;
    };
    LoginRequestBody: {
      username: string;
      password: string;
    };
    LoginResponseBody: {
      item: components["schemas"]["MemberDto"];
    };
    MemberDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: date-time */
      modifyDate: string;
      username: string;
      authorities: string[];
    };
    RsDataLoginResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["LoginResponseBody"];
      fail: boolean;
      success: boolean;
    };
    GetItemsResponseBody: {
      itemPage: components["schemas"]["PageDtoPostListItemDto"];
    };
    PageDtoPostListItemDto: {
      /** Format: int64 */
      totalElementsCount: number;
      /** Format: int64 */
      pageElementsCount: number;
      /** Format: int64 */
      totalPagesCount: number;
      /** Format: int32 */
      number: number;
      content: components["schemas"]["PostListItemDto"][];
    };
    PostListItemDto: {
      /** Format: int64 */
      id: number;
      title: string;
      published: boolean;
      /** Format: date-time */
      modifyDate: string;
      /** Format: date-time */
      createDate: string;
      authorUsername: string;
      /** Format: int64 */
      authorId: number;
    };
    RsDataGetItemsResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetItemsResponseBody"];
      fail: boolean;
      success: boolean;
    };
    GetItemResponseBody: {
      item: components["schemas"]["PostDto"];
    };
    RsDataGetItemResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetItemResponseBody"];
      fail: boolean;
      success: boolean;
    };
    GetMineResponseBody: {
      items: components["schemas"]["PostListItemDto"][];
    };
    RsDataGetMineResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetMineResponseBody"];
      fail: boolean;
      success: boolean;
    };
    MeResponseBody: {
      item: components["schemas"]["MemberDto"];
    };
    RsDataMeResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["MeResponseBody"];
      fail: boolean;
      success: boolean;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** 글 */
  getItem: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetItemResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글 수정 */
  edit: {
    parameters: {
      path: {
        id: number;
      };
    };
    requestBody: {
      content: {
        "*/*": components["schemas"]["EditRequestBody"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEditResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 임시 글 생성 */
  makeTemp: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataMakeTempResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 로그아웃 */
  logout: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 로그인, 로그인 성공시 accessToken, refreshToken 쿠키 설정 */
  login: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginRequestBody"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataLoginResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글 리스트 */
  getItems: {
    parameters: {
      query?: {
        page?: number;
        kw?: string;
        kwType?: "TITLE" | "TITLE_OR_BODY" | "NAME" | "ALL";
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetItemsResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 내 글 리스트 */
  getMine: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetMineResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 내 정보 */
  getMe: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataMeResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
}
