import serial
import time
import datetime

ser = serial.Serial(
    port='COM6',\
    baudrate=9600,\
    parity=serial.PARITY_NONE,\
    stopbits=serial.STOPBITS_ONE,\
    bytesize=serial.EIGHTBITS,\
        timeout=0)
lineanterior=''
print("conectado a: " + ser.portstr)

while True:
    line = ser.readline()
    line = line.decode()
    if (len(line)>0):
        line =  line.rstrip()
        if (lineanterior != line):
            lineanterior = line
            archivo = 'temp_humedad_'+str(datetime.datetime.fromtimestamp(time.time()).strftime('%Y%m%d')) +'.txt'
            timestamp = str(datetime.datetime.fromtimestamp(time.time()).strftime('%Y%m%d%H%M%S'))
            line= timestamp + "," + line
            print(line)
            with open(archivo, 'a') as pyfile:
                pyfile.write(line +'\n')

ser.close()