import EventEmitter from 'events'

declare global {
  interface Window { CATransport: any; }
}

export default class CATransport extends EventEmitter {
  constructor() {
    super();
    this.subscribe();
    this.sayHello();
  }

  sayHello() {
    this.sendEvent('initIframeApplication', window.location.href);
  }

  sendEvent(eventName: string, eventData: any) {
    window.top?.postMessage({
      event: eventName,
      data: eventData
    }, '*');
  }

  subscribe() {
    window.addEventListener('message', this.onMessage.bind(this));
  }

  onMessage(event: MessageEvent) {
    this.emit(event.data.event, event.data.data)
  }

  resize() {
    this.sendEvent('resize', document.getElementsByTagName('body')[0].offsetHeight + 36)
  }
}

if (typeof window !== 'undefined') {
  window['CATransport'] = CATransport;
}