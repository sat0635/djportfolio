import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I did?</span>
                <h2 className="colorlib-heading">my DEV experience</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>자동화 시스템 & SW 성능 측정 시스템 개발</h3>
                    <ul>
			<li>[연구실 프로젝트] Hadoop 클러스터링 자동화 시스템</li>
			<li>[연구실 프로젝트] HPC container 성능 측정 자동화 시스템</li>
                        <li>[연구실 프로젝트] 데이터 분석 자동화 시스템 <a href="www.naver.com">CHITAA: 동적 컨테이너 워크플로우 기반 빅데이터 분석 플랫폼 (kcc 2019)</a></li>
		    </ul>
		</div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Django 서버 개발</h3>
                    <ul>
                        <li>[인턴] 위치 기발 관광지 정보 제공 서버</li>
                        <li>[해커톤] 공사현장 2인1조 모니터링 시스템</li>
                        <li>[멘토링] 삼성전자 주니어 소프트웨어 창작대회 중등팀 Django 교육 및 개발</li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>ANDROID 앱 개발</h3>
                    <ul>
                        <li>[인턴] 위치 기반 관광지 정보 제공 앱</li>
			<li>[해커톤] P2P 거래시 차용증 발생 앱</li>
			<li>[교내프로젝트] Android & OpenCV 흡연 제스처 감지 앱</li>
                    </ul>

                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
