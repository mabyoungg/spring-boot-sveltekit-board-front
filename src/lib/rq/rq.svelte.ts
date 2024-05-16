import { goto } from '$app/navigation';

import type { components, paths } from '$lib/types/api/v1/schema';
import createClient from 'openapi-fetch';

import toastr from 'toastr';
import 'toastr/build/toastr.css';

toastr.options = {
	showDuration: 300,
	hideDuration: 300,
	timeOut: 3000,
	extendedTimeOut: 1000
  };

class Rq {
    public member: components['schemas']['MemberDto'];
	private shouldLogoutPagePaths = ['/member/login', '/member/join'];
	private shouldLoginPagePaths = ['/post/myList'];

	constructor() {
		let id = $state(0);
		let username = $state('');
		let createDate = $state('');
		let modifyDate = $state('');
		let authorities: string[] = $state([]);

		this.member = {
			get id() {
				return id;
			},
			set id(value: number) {
				id = value;
			},
			get createDate() {
				return createDate;
			},
			set createDate(value: string) {
				createDate = value;
			},
			get modifyDate() {
				return modifyDate;
			},
			set modifyDate(value: string) {
				modifyDate = value;
			},
			get username() {
				return username;
			},
			set username(value: string) {
				username = value;
			},
			get authorities() {
				return authorities;
			},
			set authorities(value: string[]) {
				authorities = value;
			}
		};
	}

	public apiEndPointsWithFetch(fetch: any) {
		return createClient<paths>({
		  baseUrl: import.meta.env.VITE_CORE_API_BASE_URL,
		  credentials: 'include',
		  fetch
		});
	  }

	public apiEndPoints() {
		return createClient<paths>({
			baseUrl: import.meta.env.VITE_CORE_API_BASE_URL,
			credentials: 'include'
		});
	}

    public msgInfo(message: string) {
		toastr.info(message);
	}

	public msgError(message: string) {
		toastr.error(message);
	}

	public goTo(url: string) {
		goto(url);
	}

	public replace(url: string) {
		goto(url, { replaceState: true });
	}

	public setLogined(member: components['schemas']['MemberDto']) {
		this.member.id = member.id;
		this.member.createDate = member.createDate;
		this.member.modifyDate = member.modifyDate;
		this.member.username = member.username;
		this.member.authorities = member.authorities;
	}

	public setLogout() {
		this.member.id = 0;
		this.member.createDate = '';
		this.member.modifyDate = '';
		this.member.username = '';
		this.member.authorities = [];
	}

	public isLogin() {
		return this.member.id !== 0;
	}

	public isLogout() {
		return !this.isLogin();
	}

	public async initAuth() {
		const { data } = await this.apiEndPoints().GET('/api/v1/members/me');

		if (data) {
			this.setLogined(data.data.item);
		}

		this.checkAuth();
	}

	public async logout() {
		const {} = await this.apiEndPoints().POST('/api/v1/members/logout');

		this.setLogout();

		this.goToMain();
	}

	public shouldLogoutPage() {
		return this.shouldLogoutPagePaths.includes(window.location.pathname);
	}

	public shouldLoginPage() {
		return this.shouldLoginPagePaths.includes(window.location.pathname);
	}

	public checkAuth() {
		if (this.isLogin()) {
			const needToGoMainPage = this.shouldLogoutPage();

			if (needToGoMainPage) {
				this.goToMain();
			}
		} else {
			const needToGoLoginPage = this.shouldLoginPage();

			if (needToGoLoginPage) {
				this.goToLoginPage();
			}
		}
	}

	public goToMain() {
		this.goTo('/');
	}

	public async goToTempPostEditPage() {
		const { data } = await this.apiEndPoints().POST('/api/v1/posts/temp');
	
		if (data) {
		  this.goTo(`/post/${data.data.item.id}/edit`);
		}
	  }

	public goToLoginPage() {
		this.goTo('/member/login');
	}

	public effect(fn: () => void) {
		$effect(() => {
			fn();
		});
	}

    public getKakaoLoginUrl() {
		return `${
			import.meta.env.VITE_CORE_API_BASE_URL
		}/member/socialLogin/kakao?redirectUrl=${encodeURIComponent(
			import.meta.env.VITE_CORE_FRONT_BASE_URL
		)}/member/socialLoginCallback?provierTypeCode=kakao`;
	}

	public goToCurrentPageWithNewQueryStr(query: string) {
		this.goTo(window.location.pathname + '?' + query);
	}
	
	public goToCurrentPageWithNewParam(name: string, value: string) {
	// 현재 URL 객체 생성
	const currentUrl = new URL(window.location.href);

	// 쿼리 매개변수를 수정하기 위한 URLSearchParams 객체 생성
	const searchParams = currentUrl.searchParams;

	// 'page' 매개변수를 새 페이지 번호로 설정
	searchParams.set(name, value);

	this.goToCurrentPageWithNewQueryStr(searchParams.toString());
	}
}

const rq = new Rq();

export default rq;