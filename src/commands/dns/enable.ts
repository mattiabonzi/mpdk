
import BaseCommand from '../../class/base-command.js';
import ui from '../../class/ui.js';
import Dns from '../../class/dns.js';




export default class DnsEnable extends BaseCommand<typeof DnsEnable> {
  static description = 'Stop an instance (data will NOT be destroyed)'


  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]


  public async run(): Promise<void> {
    try {
        ui.action.start('Enabling DNS');
        await (new Dns(this.mpdk)).enable();
        this.success("DNS enabled");
    } catch (e) {
      ui.throw(e);
    }

  }
}
