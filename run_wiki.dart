import 'dart:io';

void main() async {
  print('Connecting to MEV Wiki...');
  if (Platform.isWindows) {
    await Process.run('cmd', ['/c', 'start', 'index.html']);
  } else if (Platform.isMacOS) {
    await Process.run('open', ['index.html']);
  } else {
    await Process.run('xdg-open', ['index.html']);
  }
}
