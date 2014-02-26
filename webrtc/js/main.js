'use strict';

var isChannelReady;
var isInitiator = false;
var isStarted = false;
var localStream;
var pc;
var remoteStream;
var turnReady;

var pc_config = {'iceServers': [{'url': 'stun:stun.l.google.com:19302'}]};

var pc_constraints = {'optional': [{'DtlsSrtpKeyAgreement': true}]};

// Set up audio and video regardless of what devices are present.
var sdpConstraints = {'mandatory': {
  'OfferToReceiveAudio':true,
  'OfferToReceiveVideo':true }};

var localVideo = document.querySelector('#localVideo');
var remoteVideo = document.querySelector('#remoteVideo');

var constraints = {video: true};

function setupLocalVideo(stream){
  localVideo.src= window.URL.createObjectURL(stream);
  localStream= stream;
}

function logMediaError(error){
  console.log(error);
}

getUserMedia(constraints, setupLocalVideo, logUserMediaError);













