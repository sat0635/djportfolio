import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>삼성전자 주니어소프트웨어 창작대회 멘토링 <span>2019-07-29 ~ 2019-11-22 </span></h2>
			<p>중학생 멘티님들이 구상한 주제인 "시각 장애인분들을 위한 스마트 신발, C.E.O.S"를 구현하는데 도움을 주었습니다. 안드로이드에서 서버DB에 저장된 이동경로를 이용하기위해, Django 서버에서 REST API를 개발하는 방법을 멘토링 했습니다.</p>
                   <Grid container spacing={3}>
                       <Grid item>
                          <Grid container justify="center" >

                             <Grid  item xs={4} >
                                <img className="award" src='images/award/ssw_picture.jpg'  />
                             </Grid>

                             <Grid  item xs={4}>
                                <img className="award" src='images/award/ssw_picture2.jpg'  />
                             </Grid>
                             <Grid  item xs={4}>
                                <img className="award" src='images/award/ssw_concept.jpg'  />
                             </Grid>


                          </Grid>
                       </Grid>
                    </Grid>
                      </div>
                    </div>
                  </article>




                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>2019 WSCE 스마트시티 메이커톤(우수상)  <span>2019-09-06</span></h2>
			<p>아파트 단지마다 플라스틱 [분쇄, 분류, 원료] 자동화 디바이스를 설치하여 해당 위치를 web으로 관리하는 시스템을 개발했습니다. react로 구현된 이 web을 통해  플라스틱의 원료화된 용량의 현 상태를 확인하고 일정 수준 이상이 되면 수거해 가는 스마트시티를 제시했습니다.</p>
                   <Grid container spacing={3}>
                       <Grid item>
                          <Grid container justify="center" >

                             <Grid  item xs={4} >
                                <img className="rotate180" src='images/award/wsce_award.jpg'  />
                             </Grid>

                             <Grid  item xs={4}>
                                <img className="award" src='images/award/wsce_map.jpg'  />
                             </Grid>
                             <Grid  item xs={4}>
                                <img className="award" src='images/award/wsce_picture.jpg'  />
                             </Grid>


                          </Grid>
                       </Grid>
                    </Grid>
                      </div>
                    </div>
                  </article>


                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>부산 울산 안전메이커톤(대상)  <span>2019-07-21</span></h2>
			<p>공사현장을 여러 섹션으로 나눈 후 섹션마다 배치된 비콘을 통해 해당 섹션에 위치한 근로자를 파악합니다. 해당 비콘은 REST API를 통해 Django 서버로 근로자의 상태를 보고하고 비콘에 2명이상 존재 시 기계설비를 사용할 수 있는 시스템을 개발했습니다</p>
                   <Grid container spacing={3}>
                       <Grid item>
                          <Grid container justify="center" >
			
                             <Grid  item xs={4} >
                                <img className="award" src='images/award/busan_award.jpg'  />
                             </Grid>

                             <Grid  item xs={4}>
                                <img className="award" src='images/award/busan_concept2.jpg'  />
                             </Grid>
                             <Grid  item xs={4}>
                                <img className="award" src='images/award/busan_picture.jpg'  />
                             </Grid>


                          </Grid>
                       </Grid>
                    </Grid>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>KCC2019 논문 구두 발표  <span>2019-06-27</span></h2>
			<p>JSON파일을 통해 전체 빅데이터 분석과정을 관리하고 항상 최단 시간에 데이터를 분석하는 시스템을 개발 후 논문 작성 및 발표했습니다.</p>
                   <Grid container spacing={3}>
                       <Grid item>
                          <Grid container justify="center" >

                             <Grid  item xs={4} >
                                <img className="award" src='images/award/kcc_picture.jpg'  />
                             </Grid>

                             <Grid  item xs={4}>
                                <img className="award" src='images/award/kcc_concept.PNG'  />
                             </Grid>
                             <Grid  item xs={4}>
                                <img className="award" src='images/award/kcc_flow.jpg'  />
                             </Grid>


                          </Grid>
                       </Grid>
                    </Grid>
                      </div>
                    </div>
                  </article>



                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>제2회 Creative Space G AI & IoT 메이커톤(우수상) <span>2018-12-23</span></h2>
			<p>매장 테이블에  마이크가 달린 라즈베리파이 부착합니다. 해당 테이블의 손님은 마이크를 통해 구두로 서비스를 요청하고, 카운터와 주방에서는 구두의 서비스를 큐형태의 텍스트로 확인할 수 있습니다.</p>

	   	   <Grid container spacing={1}>
		       <Grid item>
		          <Grid container justify="center" >
                             <Grid  item xs={4} >
				<img className="award" src='images/award/gwangju_award.jpg'  />
                             </Grid>
			         
     	      	             <Grid  item xs={4}>
	                	<img className="award" src='images/award/gwangju_picture.jpg'  />  
	 		     </Grid>
                             <Grid  item xs={4}>
                                <img className="award" src='images/award/gwangju_picture2.jpg'  />
                             </Grid>

				
		          </Grid>
		       </Grid>
		    </Grid>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
